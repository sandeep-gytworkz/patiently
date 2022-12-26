import { initRegState } from "../States";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state, login: true,
            };
        default:
            return state
    }
}

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

export const dashboardReducer = (state, action) => {
    switch (action.type) {
        case 'getDashboard': 
            return {
                ...state, dashboard: action.payload
            };
        case 'getParticipants': 
            return {
                ...state, participants: action.payload
            };
        default:
            return state
    }
}