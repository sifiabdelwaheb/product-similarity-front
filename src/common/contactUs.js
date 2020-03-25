function ContactUs(contactUs) {
  this.contactUs = contactUs;
}

function contactUsForm() {
  return new ContactUs({
    username: {
      elementType: "Input",
      elementConfig: {
        type: "text",
        label: "First Name",
        name: "firstname"
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: "Input",
      elementConfig: {
        type: "text",
        label: "Last Name",
        name: "lastname"
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    

    useremail: {
      elementType: "Input",
      elementConfig: {
        type: "email",
        label: "E-mail"
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    adresse: {
      elementType: "Input",
      elementConfig: {
        type: "password",
        label: "adresse",
        name: "adresse"
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
  });
}

export default contactUsForm;