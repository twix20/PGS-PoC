import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import SkiCamCard from "../../components/SkiCamCard";
import Loading from "../../components/Loading";

import { fetchCams } from "../../api/XMashapeApi";

import axios from "axios";

class SkiCamListContainer extends Component {
  state = {
    camCards: [],
    isFetching: true
  };

  performFetchCams = skiCams => {
    this._source = axios.CancelToken.source();

    //TODO: move it to hoc
    fetchCams({
      cancelToken: this._source.token
    })
      .then(response => {
        const camCards = Object.entries(response.data)
          .filter(c => c[1].name in skiCams)
          .map(c => {
            const locationCam = c[1];
            const camsToDisplay = skiCams[locationCam.name];

            if (!camsToDisplay) throw new Error("Unknown location cam name");

            const images = camsToDisplay.cams.map(camName => {
              const { url, name } = locationCam.cams[camName];

              return {
                url,
                name
              };
            });

            return {
              title: locationCam.name,
              images: images,
              date: new Date()
            };
          });

        this.setState({ camCards, isFetching: false });
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error);
        } else {
          console.log(error);
        }
      });
  };

  componentDidMount() {
    const { skiCams } = this.props;

    this.performFetchCams(skiCams);
  }

  render() {
    const { camCards, isFetching } = this.state;

    if (isFetching) return <Loading />;

    return (
      <div>
        <Grid container spacing={16} justify="center">
          {camCards.map(camCard => (
            <Grid item key={camCard.title}>
              <SkiCamCard {...camCard} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

SkiCamListContainer.propTypes = {
  skiCams: PropTypes.object.isRequired
};

export default SkiCamListContainer;
