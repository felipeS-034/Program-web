import React from "react"

export function Counter(){
    const footerStyles = {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "4px"
    }

    return(
        <footer style={footerStyles}>
            <button>-</button>
            <span>0</span>
            <button>+</button>
        </footer>
    )
}