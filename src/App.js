import ExpenseItem from "./Expenseitem";
function App() {
  const Expenses=[
    {title:"car insurance",amount:240,date:new Date(2023,3,21)},
  {title:"petrol",amount:250,date:new Date(2023,4,21)},
  {title:"food",amount:260,date:new Date(2023,6,21)},
  {title:"groceries",amount:270,date:new Date(2023,1,21)}
]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={Expenses[0].title} amount={Expenses[0].amount} date={Expenses[0].date}></ExpenseItem>
      <ExpenseItem title={Expenses[1].title} amount={Expenses[1].amount} date={Expenses[1].date}></ExpenseItem>
      <ExpenseItem title={Expenses[2].title} amount={Expenses[2].amount} date={Expenses[2].date}></ExpenseItem>
      <ExpenseItem title={Expenses[3].title} amount={Expenses[3].amount} date={Expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
