import React from "react";
import "../../styles/style.css"
import Spacer from "../Spacer-footer";


const Confirmation = () => {
    return (
        <section className="confirmation">
            <Spacer/>
            <div className="conf-div">
                <h1>You are all set.</h1>
                <p>You reservation is confirmed!</p>
            </div>
        </section>
    )
}

export default Confirmation;