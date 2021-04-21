import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../styles/NameAndPhone.css";

export class NameAndPhone extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
              <div variant="h6" color="inherit" className="title-text">
                Name and phone number
              </div>
            </div>
            <TextField
              label="First Name"
              floatingLabelText="First name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              className="text-input-page-one"
            />
            <div className="error-text">
              {values.errors.firstNameEr ? values.errors.firstNameEr : ""}
            </div>
            <br />
            <TextField
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              className="text-input-page-one"
            />
            <div className="error-text">
              {values.errors.lastNameEr ? values.errors.lastNameEr : ""}
            </div>

            <br />
            <TextField
              label="Phone Number"
              onChange={handleChange("phoneNumber")}
              defaultValue={values.phoneNumber}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              className="text-input-page-one"
            />
            <div className="error-text">
              {values.errors.phoneNumberEr ? values.errors.phoneNumberEr : ""}
            </div>

            <br />
            <Button
              className="button-style-page-one"
              variant="contained"
              color="primary"
              onClick={this.continue}
            >
              Next
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

export default withStyles(styles)(NameAndPhone);
