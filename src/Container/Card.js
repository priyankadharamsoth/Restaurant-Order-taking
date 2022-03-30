import React from 'react'
import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenumber } from '../Actions';

const Card = ({filter_name,table_num,addorder}) => {
    const [data, setData] = React.useState([]);
    const [clonedata, setCloneData] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://items-56180-default-rtdb.firebaseio.com/items.json").then(
            response => response.json()
        ).then(
            json => {setData(json);
            setCloneData(json); 
            }
        )
    }, [])

    React.useEffect(() => {
        if (filter_name != "All Items"){
            let specific = clonedata.filter(item => item.category===filter_name)
            setData(specific);
        }
        else {
            setData(clonedata)
        }
    },[filter_name])

    const Handler = async (id,name,price,url) =>{
        if (table_num != null){
            await addorder(id,name,price,table_num, url)
            resettablenumber();
            resetfilter();
            alert('order placed successfully')
        }
        else{
            alert("please select the table number ")
        }
    }
  return (
    <div>
        <center>
            {data.length > 0 ?
            <div className='container'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-4' style={{padding:"4px"}} key={item.id}>
                            <div className='card' style={{width:"19rem",padding:'3px'}}>
                            <img src ={item.url} className= "card-img-top" width="250" height="250"/>
                            <div className="card-body">
                                <h5 className='card-title'>{item.name}</h5>
                                <div className='card-text'>Rs.{item.price}</div>
                                <button className='btn btn-primary' onClick={() => Handler(item.id,item.name,item.price,item.url)}>
                                    Order</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            :
            <div className='spinner-border text-primary'></div>

            
        }
        </center>
      
    </div>
  )
}
const mapStateToProps = state =>({
    filter_name : state.filterreducer.filter_name,
    table_num : state.tablereducer.table_num
})

export default connect(mapStateToProps,{addorder})(Card);
