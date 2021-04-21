import React from "react";
import { NameAndPhone } from "./steps/NameAndPhone";
import { EmailAndDob } from "./steps/EmailAndDob";
import { Confirmation } from "./steps/Confirmation";
import { Submit } from "./steps/Submit";

export class RegisterForm extends React.Component {
  state = {
    errors: {},
    step: 1,
    fields: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
    },
  };

  //This function validate all inputs
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // This variable to check the steps to target the second page validation
    let counter = this.state.step;

    //FirstName check
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstNameEr"] = "First name cannot be empty";
    } else if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstNameEr"] = "Only letters accepted";
      }
    }
    //lastName check
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastNameEr"] = "Last name cannot be empty";
    } else if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastNameEr"] = "Only letters accepted";
      }
    }
    //phone number check
    //10 number allowed
    if (!fields["phoneNumber"]) {
      formIsValid = false;
      errors["phoneNumberEr"] = "Phone number cannot be empty";
    } else if (typeof fields["phoneNumber"] !== "undefined") {
      //10 numbers format
      var phoneNu = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if (!fields["phoneNumber"].match(phoneNu)) {
        formIsValid = false;
        errors["phoneNumberEr"] = "The numbers should be 10 digits";
      }
    }
    //Email check
    if (counter === 2) {
      if (!fields["email"]) {
        formIsValid = false;
        errors["emailEr"] = "Email Cannot be empty";
      } else if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf("@");
        let lastDotPos = fields["email"].lastIndexOf(".");

        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            fields["email"].indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            fields["email"].length - lastDotPos > 2
          )
        ) {
          formIsValid = false;
          errors["emailEr"] = "Email is not valid";
        }
      }
      //dob check
        let dateOfBirth = this.state.fields.dob;
      var optimizedBirthday = dateOfBirth.replace(/-/g, "/");
      var myBirthday = new Date(optimizedBirthday);
      var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
      // // calculate age comparing current date and birthday
      var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);
      if (!fields["dob"]) {
        formIsValid = false;
        errors["dobEr"] = "Date of birth Cannot be empty";
      } else if (myAge < 18) {
        formIsValid = false;
        errors["dobEr"] = "You are younger than 18";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  // This function will increment the steps
  nextStep = () => {
    const { step } = this.state;
    if (this.handleValidation()) {
      this.setState({
        step: step + 1,
      });
    }
  };
  // This function will decrement the steps
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  // This function handles the input text change
  handleChange = (field) => (e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  };

  render() {
    const { step, errors } = this.state;
    const { firstName, lastName, email, phoneNumber, dob } = this.state.fields;
    const values = { firstName, lastName, email, phoneNumber, dob, errors };

    switch (step) {
      case 1:
        return (
          <NameAndPhone
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <EmailAndDob
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );
      case 4:
        return <Submit />;
      default:
        console.log("error")
    }
  }
}
export default RegisterForm;
