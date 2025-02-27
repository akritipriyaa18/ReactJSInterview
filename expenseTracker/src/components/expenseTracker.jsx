import React, { useState } from "react"
import Dropdown from "./Dropdown/Dropdown"
import DropdownItem from "./DropdownItems/DropdownItem"

const expenseTracker = () => {
    const [expense, setExpense] = useState("")

    const items = ["Starbucks Overdose ☕", "Retail Therapy 🛍️", "Foodie Adventures 🍕", "Useless Subscriptions 📺 ", "Random Splurges 💸"]

    const handleExpense = (event) => {
        setExpense(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const regex = /[^0-9]/g
        if(regex.test(expense))
        {
            alert("Are you stupid????")
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
        <input type="text"
               value={expense}
               onChange={handleExpense}>
        </input>
        <button type="submit">Submit</button>
        </form>
        <div className="expense-content">
        <Dropdown buttonText="Dropdown button" content={
            <>
            {
                items.map((item) => (<DropdownItem key={item}>
                    {`Item ${item}`}
                </DropdownItem>
                ))
            }
            </>
        }/>
        </div>
    </div>
}

export default expenseTracker