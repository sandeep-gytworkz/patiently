export const initRegState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export const registrationReducer = (state, action) => {
  switch (action.type) {
    case "REGISTRATION_COMPLETE":
      let registrationData = { ...initRegState };
      let data = action.data;
      registrationData.firstName = data.firstName;
      registrationData.lastName = data.lastName;
      registrationData.email = data.email;
      registrationData.phoneNumber = data.phoneNumber;
      return registrationData;
    default:
      return state;
  }
};

// export default registrationReducer;
