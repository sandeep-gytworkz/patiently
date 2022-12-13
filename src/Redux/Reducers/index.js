
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