import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import ListGroup from './components/ListGroup'


function App() {

  const [transections,setTransections] = useState([{
    id : 1,
    text : "salary",
    amount : 10000,
  },
  { id : 2,
  text : "Expense",
  amount : -5000,
  },])


  const handleDelte = (id) => {
    setTransections(
      transections.filter(transection => transection.id !== id)
    )
  }

  const addTransection = (text,amount) => {
    let id = crypto.randomUUID()
    const newTransection = {id,text,amount:parseInt(amount),}
    setTransections([newTransection,...transections])
  }

  const [edit,setEdit] = useState({
    transection : {},
    isEdit : false,
  })


  const editTransection = (transection) => {
    setEdit(
      {
        transection : transection,
        isEdit : true
      }
    )
  }

  const updateTransection = (updateTransection) => {
    setTransections(
      transections.map(item => item.id === updateTransection.id ? updateTransection : item)
    );
    setEdit({
      transection: {},
      isEdit: false,
    });
  }

  


  return (
    <>
    <Navbar/>
    <div className="container p-5 my-2">
      <Form addTransection={addTransection} updateTransection={updateTransection} edit={edit}/>
      <Dashboard transections={transections}/>
      <ListGroup transections={transections} handleDelte={handleDelte} editTransection={editTransection}/>


    </div>

    </>
  )
}

export default App
