import React from 'react'

const ListItem = ({transection,handleDelte,editTransection}) => {
  return (
    <>
    
    <li className = { transection.amount > 0 ? "list-group-item bg-success d-flex justify-content-between text-light" :"list-group-item bg-danger d-flex justify-content-between text-light"}>
        <h3>{transection.text} : {transection.amount}</h3>
        <div>
        <button onClick={()=>editTransection(transection)} className="btn btn-outline-light btn-sm">Edit</button>
        <button onClick={()=>handleDelte(transection.id)} className="btn btn-outline-light btn-sm mx-2">Delete</button>
        </div>
      </li>

      
    
    </>
  )
}

export default ListItem