import React from "react"

export function Footer(){
    const headerStyles = {
        display: "flex",
        justifyContent: "center",
        position: "relative", 
        top: "90px", 
    }
 
    return(
        <header style={headerStyles}>
            <h1>Andrés Felipe Santacruz</h1>       
        </header>
    )
}