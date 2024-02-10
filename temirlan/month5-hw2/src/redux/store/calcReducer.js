const initialState = {
    list: []
}

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {...state, list: [state.list.length !== 0 ? action.payload + state.list[0] : action.payload, ...state.list]}
        case "MINUS":
            return {...state, list: [state.list.length !== 0 ? state.list[0] - action.payload : action.payload, ...state.list]}
        case "MULTIPLY":
            return {...state, list: [state.list.length !== 0 ? action.payload * state.list[0] : action.payload, ...state.list]}
        case "DIVIDE":
            return {...state, list: [state.list.length !== 0 ? (state.list[0] !== 0 ? state.list[0] / action.payload : state.list[0]) : action.payload, ...state.list]}
        case "CLEAR":
            return {...state, list: []}
        default:
            return state
    }
}