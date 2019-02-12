import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 10
  },
  pos: {
    marginBottom: 12
  }
};

const SkiCamCard = ({ classes, date, title, images }) => {
  const dateFormated = moment(date).format("DD-MM-YYYY");

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          align="right"
        >
          {dateFormated}
        </Typography>

        <Typography variant="h6" component="h3" align="center">
          {title}
        </Typography>
      </CardContent>

      {images.map(({ name, url }) => (
        <CardMedia
          key={url}
          alt={name}
          image={url}
          title={name}
          className={classes.media}
          component="img"
          height="140"
        />
      ))}
    </Card>
  );
};

SkiCamCard.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default withStyles(styles)(SkiCamCard);
