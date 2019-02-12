import React from "react";
import AboutCard from "../../components/AboutCard";

import Grid from "@material-ui/core/Grid";

const cards = [
  {
    image:
      "https://c.pxhere.com/photos/44/fd/office_desk_work_study_tech_technology_working_business-723138.jpg!d",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu."
  },
  {
    image:
      "https://c.pxhere.com/photos/44/fd/office_desk_work_study_tech_technology_working_business-723138.jpg!d",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu."
  },
  {
    image:
      "https://c.pxhere.com/photos/44/fd/office_desk_work_study_tech_technology_working_business-723138.jpg!d",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu."
  }
];

const AboutUsPage = props => {
  return (
    <div>
      <Grid container spacing={16}>
        {cards.map(c => (
          <Grid item>
            <AboutCard {...c} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutUsPage;
