import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = props => <CircularProgress {...props} />;

Loading.defaultProps = {
  size: 40,
  thickness: 3.6
};

export default Loading;
