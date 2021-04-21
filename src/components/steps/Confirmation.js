import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import "../styles/Confirmation.css";

export class Confirmation extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, phoneNumber, dob },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container className="containerStyle">
            <div className={styles.root}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    className={styles.menuButton}
                    color="inherit"
                    aria-label="Menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <div
                variant="h6"
                color="inherit"
                className="title-text-confirm"
                variant="h6"
                color="inherit"
              >
                Confirmation
              </div>
            </div>

            <div className="containerStyle">
              <h2 className="text-view">The first name</h2>
              <h4 className="result-text-view"> {firstName}</h4>
              <h2 className="text-view">The last name </h2>
              <h4 className="result-text-view"> {lastName}</h4>
              <h2 className="text-view">The phone number name </h2>
              <h4 className="result-text-view"> {phoneNumber}</h4>
              <h2 className="text-view">The Email</h2>
              <h4 className="result-text-view"> {email}</h4>
              <h2 className="text-view">The Date of Birth </h2>
              <h4 className="result-text-view">{dob}</h4>
            </div>

            <br />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              style={{ marginTop: "1rem" }}
              onClick={this.continue}
              style={{
                width: "20ch",
                align: "center",
              }}
            >
              Confirm
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              style={{ marginTop: "1rem" }}
              onClick={this.back}
              style={{
                width: "20ch",
                align: "center",
                margin: "5px",
              }}
            >
              Back
            </Button>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  input: {
    color: "white",
  },
};
export default withStyles(styles)(Confirmation);
