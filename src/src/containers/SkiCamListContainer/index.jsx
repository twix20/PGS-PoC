import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import SkiCamCard from "../../components/SkiCamCard";
import withRequestData from "../../components/hocs/withRequestData";

import { fetchCams } from "../../api/XMashapeApi";

class SkiCamListContainer extends Component {
  constructor(props) {
    super(props);

    const { data, skiCams } = props;

    this.camCards = Object.entries(data)
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
  }

  render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          {this.camCards.map(camCard => (
            <Grid key={camCard.title} item md={6}>
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

export default withRequestData(
  props => ({ request: fetchCams, params: {} }),
  "data"
)(SkiCamListContainer);
