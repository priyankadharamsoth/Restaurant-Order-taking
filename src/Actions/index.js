export const settablenumber = (value) => async dispatch => {
    dispatch ({
        type: "SetTableNumber",
        payload : value
    })
}
export const resettablenumber = (value) => async dispatch => {
    dispatch ({
        type: "ResetTableNumber",
    })
}
export const  setfilter= (value) => async dispatch => {
    dispatch ({
        type: "SetFilter",
        payload : value
    })
}

export const resetfilter = (value) => async dispatch => {
    dispatch ({
        type: "ResetFilter",
        payload : value
    })
}
export const addorder= (id,name,price,table_num,url) => async dispatch => {
    dispatch ({
        type: "AddOrder",
        payload : {
            id :id ,
            name : name,
            price : price,
            table_num : table_num,
            url :url

        }
    })
}
