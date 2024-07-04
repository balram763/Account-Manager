import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transections,handleDelte,editTransection}) => {
  return (
    <>     
    <div className="card p-3">
    <ul className="list-group">
        {
          transections.map(transection=><ListItem key={transection.id} transection={transection} handleDelte={handleDelte} editTransection={editTransection}/>)
        }
    </ul>
  </div>
  </>
  )
}

export default ListGroup