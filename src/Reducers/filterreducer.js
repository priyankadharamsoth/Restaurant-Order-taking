const initialState = {
    filter_name : "All Items"
}

export default function filter_name (state= initialState, action){
    const {type, payload} = action

    switch(type){
        case "SetFilter":
            return {...state, filter_name: payload}
        case "ResetFilter":
            return {...state, filter_name: "All Items"}
        default:
            return state
    }
}
