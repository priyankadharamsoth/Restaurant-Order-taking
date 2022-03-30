
const initialState = []

export default function orderreducer (state= initialState, action) {
    const {type, payload} = action;
    switch (type){
        case "AddOrder":
            return [...state,payload]
        default:
            return state
    }

}