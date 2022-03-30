import React from 'react'
import { connect } from 'react-redux'
import {settablenumber} from '../Actions'

const Table = ({table_num, settablenumber}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const inActiveBtn = 'btn btn-outline-primary m-2'
    const activeBtn = 'btn btn-outline-primary m-2 active'
    const [number, setNumber] = React.useState(null);
    return (
    <div>
        <center className="mt-2">
            <h4>Please select your table number</h4>
            {numbers.map((num, index)=> (
                <div style={{display : 'inline'}} key ={index}>
                    <button className={table_num==num?activeBtn:inActiveBtn} onClick={() => settablenumber(num)}>
                        {num}
                    </button>
                </div>

            ))}
        </center>
      
    </div>
  )
}
const mapStateToProps = state => ({
    table_num :state.tablereducer.table_num
})

export default connect(mapStateToProps,{settablenumber})(Table);