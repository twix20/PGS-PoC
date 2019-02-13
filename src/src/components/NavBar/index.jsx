import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.appBar
  },
  navItemContainer: {
    padding: 0,
    cursor: "pointer"
  },
  appBarContainer: {
    display: "flex"
  },
  appBar: {
    maxWidth: 500,
    backgroundColor: "white"
  },
  navItem: {},
  tabLabel: {
    color: theme.palette.grey["A400"]
  },
  tabLabelSelected: {
    "& span": {
      color: theme.palette.secondary.main
    }
  }
});

const NavBar = ({ classes, history, items }) => {
  const [value, setValue] = React.useState(0);

  // Set current tab value according to URL path
  const currentItem = items.find(i => i.to === history.location.pathname);
  const currentItemIndex = items.indexOf(currentItem);
  if (value !== currentItemIndex) setValue(currentItemIndex);

  const handleCallToRouter = (event, value) => {
    const { to } = items[value];
    history.push(to);

    setValue(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.appBarContainer}>
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <Tabs value={value} onChange={handleCallToRouter}>
            {items.map(i => (
              <Tab
                key={i.text}
                label={i.text}
                classes={{
                  selected: classes.tabLabelSelected,
                  label: classes.tabLabel
                }}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  )
};

export default withRouter(withStyles(styles)(NavBar));
