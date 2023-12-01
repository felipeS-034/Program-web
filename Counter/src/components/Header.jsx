import React from "react"

export function Header(){

    const sectionStyle = {
        minHeight: "50vh",
        minWidth: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return(
        <main>
            <section style={sectionStyle}>
                <h1>Contador</h1>
            </section>
        </main>
    )
}