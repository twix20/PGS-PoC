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
    image: "https://g10.infor.pl/p/_files/252000/6_maszyna_do_pisania_6_4.jpg",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu."
  },
  {
    image:
      "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/hero-and-hub/food/food-hero-1260x600.jpg",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu."
  }
];

const AboutUsPage = props => {
  return (
    <div>
      <Grid container spacing={16} justify="center">
        {cards.map(c => (
          <Grid item key={c.image}>
            <AboutCard {...c} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutUsPage;
