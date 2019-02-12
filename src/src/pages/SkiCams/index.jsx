import React from "react";
import SkiCamListContainer from "../../containers/SkiCamListContainer";

const skiCams = {
  Andalo: {
    name: "Andalo",
    cams: [56, 57]
  },
  "Monte Bondone": {
    name: "Monte Bondone",
    cams: [479, 480]
  }
};

const SkiCamsPage = props => {
  return (
    <div>
      <SkiCamListContainer skiCams={skiCams} />
    </div>
  );
};

export default SkiCamsPage;
