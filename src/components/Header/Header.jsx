import React, { useState } from "react";

export default function Header(props) {    
    return (
        <header>
            {props.children}
        </header>       
    )
}