import React from 'react'

const Dashboard = ({transections}) => {

  const Balance = transections.reduce((p,c)=>p+c.amount,0)
  const income = transections.filter(transection => transection.amount > 0 ).reduce((p,c)=>p+c.amount,0)
  const Expense = transections.filter(transection => transection.amount < 0 ).reduce((p,c)=>p+c.amount,0)

  
  return (
    
    <>
    
    <div className="p-4 card text-center">
        <div className="row">
          <div className="col bg-primary text-light rounded-1 p-2">
            <h5>Total Income</h5>
            <h1>{income}</h1>
          </div>
          <div className="col bg-danger text-light rounded-1 p-2">
            <h5>Total Expense :</h5>
            <h1>{Expense}</h1>
          </div>
          <div className="col bg-warning text-light rounded-1 p-2">
            <h5>Balance : </h5>
            <h1>{Balance}</h1>
          </div>
        </div>
      </div>
</>
  )
}

export default Dashboard