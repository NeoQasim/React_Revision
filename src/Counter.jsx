import { useState } from "react"
import "./app.css"

const Counter = () => {

    const [display, setdisplay] = useState(0)
    const handleclick = (e) => {

        if (e.target.innerHTML === "increase") {
            console.log("hello" + Math.random());
            setdisplay(display+1)
        }

        if (e.target.innerHTML === "decrease") {
            console.log("hello" + Math.random());
            setdisplay(display-1)
        }

        if (e.target.innerHTML === "reset") {
            console.log("hello" + Math.random());
            setdisplay(0)
        }
    }
    return (
        <>
            <div className="container">
                <div className="display">
                    <h1>{display}</h1>
                </div>
                <div className="btns">
                    <button onClick={handleclick} className="btn " style={{ backgroundColor: "green" }} type="button">increase</button>
                    <button onClick={handleclick} className="btn " style={{ backgroundColor: "blue" }} type="button">reset</button>
                    <button onClick={handleclick} className="btn " style={{ backgroundColor: "red" }} type="button">decrease</button>
                </div>
            </div>
        </>
    )
}

export default Counter