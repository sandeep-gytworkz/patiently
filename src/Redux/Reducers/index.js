export const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state, login: true
            };
        default:
            return state
    }
}