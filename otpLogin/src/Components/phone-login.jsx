import React from "react";
import { useState } from "react";

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOTP, setShowOTPInput] = useState(false)

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleSubmit = (event) => {
       event.preventDefault()

       //phone validations

       const regex = /[^0-9]/g;
       if(phoneNumber.length<10 || regex.test(phoneNumber)){
        alert("Invalid Phone Number")
        return
       }

       setShowOTPInput(true)
    }
    return <div>
        {!showOTP ? 
        <form onSubmit={handleSubmit}>
        <input type="text"
               value={phoneNumber} 
               onChange={handlePhoneNumber}
               placeholder="Enter Phone Number"/>
        <button type="submit">Submit</button>
        </form> : <div>
            <p>Enter Otp sent to your {phoneNumber}</p>
        </div>}
    </div>
}

export default PhoneOtpForm