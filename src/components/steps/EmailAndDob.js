import React from "react";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import "../styles/EmailAndDob.css";

export class EmailAndDob extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const { values, handleChange } = this.props;
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
                color="inherit"
                className="title-text"
                variant="h6"
              >
                Email and Date of Birth
              </div>
            </div>
            <TextField
              label="E-email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required={true}
              className="text-input-page-two"
            />
            <div className="error-text">
              {values.errors.emailEr ? values.errors.emailEr : ""}
            </div>

            <br />
            <TextField
              id="date"
              type="date"
              label="Date of Birth"
              onChange={handleChange("dob")}
              defaultValue="2004-05-24"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required={true}
              className="text-input-page-two"
            />
            <div className="error-text">
              {values.errors.dobEr ? values.errors.dobEr : ""}
            </div>

            <br />

            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.continue}
              style={{
                width: "20ch",
                align: "center",
                marginTop: "1rem"
              }}
            >
              Next
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={this.back}
              style={{
                width: "20ch",
                marginTop: "1rem"
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

export default withStyles(styles)(EmailAndDob);
