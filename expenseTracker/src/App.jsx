import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseTracker from './components/expenseTracker'

function App() {

  return <div className='app'>Expense Tracker
  <ExpenseTracker />
  </div>
}

export default App
