import React from "react"
import DropdownButton from "../DropdownButton/DropdownButton"
import DropdownContent from "../DropdolwnContent/DropdownContent"
import './Dropdown.css'
import { useState } from "react"

const Dropdown = ({buttonText, content}) => { 

    const [open, setOpen] = useState(false)

    const toggleDropdown = () => {
        setOpen((open) => !open)
    }

    const closeDropdown = () => {
        setOpen(false);
    };


    return <div className="dropdown"><DropdownButton toggle={toggleDropdown} open={open}>{buttonText}</DropdownButton>
    <DropdownContent>{React.Children.map(content, (child) => 
                                   React.cloneElement(child, {onClick: closeDropdown})
    )}</DropdownContent>
    </div>
}

export default Dropdown