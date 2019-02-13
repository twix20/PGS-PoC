import React, { Component } from "react";
import axios from "axios";

import Loading from "../Loading";

const withRequestData = (requestProvider, dataName) => WrappedComponent => {
  class WithRequest extends Component {
    state = {
      isFetching: true,
      data: null
    };
    componentDidMount() {
      const { request, params } = requestProvider(this.props);

      this._source = axios.CancelToken.source();

      const promise = request.call(null, {
        ...params,
        cancelToken: this._source.token
      });

      promise
        .then(response => {
          this.setState({ data: response.data, isFetching: false });
        })
        .catch(error => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            console.log(error);
          }
        });
    }

    componentWillUnmount() {
      this._source.cancel("Component unmounted");
    }

    render() {
      const { isFetching, data } = this.state;

      if (isFetching) return <Loading />;

      const dataProps = {
        [dataName]: data
      };

      return <WrappedComponent {...this.props} {...dataProps} />;
    }
  }

  return WithRequest;
};

export default withRequestData;
