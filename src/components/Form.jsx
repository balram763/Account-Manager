import React, { useEffect, useState } from 'react'

const Form = ({addTransection,updateTransection,edit}) => {


  const [text , setText] = useState('')
  const [amount, setAmount] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit){
      updateTransection({
        id: edit.transection.id,
        text : text,
        amount : +amount,
      })
    }
    else{
      addTransection(text,amount)
    }
  }

  useEffect(() => {
    setText(edit.transection.text);
    setAmount(edit.transection.amount);
  }, [edit]);

  
    

  


  return (
    <>
<form onSubmit={(e)=>handleSubmit(e)} >
        <h2 className='text-center mb-4'>Record your Treansections</h2>
        <div className="card p-4 my-2">
        <input  type="text" className="form-control" placeholder='Enter Transections' 
        onChange={(e)=>setText(e.target.value)}
        value={text}
        />
        <input onChange={(e)=>setAmount(e.target.value)} value={amount} type="number" className="form-control my-2" placeholder='Enter Amount'
        />
        <button className="btn btn-success form-control my-2">Save Transections</button>
        </div>
    </form> 

    </>
  )
}

export default Form