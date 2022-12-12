
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

export const dashboardReducer = (state, action) => {
    switch (action.type) {
        case 'getPatients': 
            return {
                ...state, patients: action.payload
            };
        case 'getParticipants': 
            return {
                ...state, participants: action.payload
            };
        default:
            return state
    }
}