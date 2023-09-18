import { useState } from "react"
const Bgchanger = () => {
    const [color, setcolor] = useState("olive")
    const handleclick = (e) => {
        if (e.target.innerHTML === "Pink") {
            setcolor("pink")
        }
        if (e.target.innerHTML === "Black") {
            setcolor("black")
        }
        if (e.target.innerHTML === "Green") {
            setcolor("green")
        }
        if (e.target.innerHTML === "Red") {
            setcolor("red")
        }
        if (e.target.innerHTML === "Orange") {
            setcolor("orange")
        }
    }

    return (
        <><h3 className="text-center font-bold bg-black text-white text-xl">Bg Changer</h3>
            <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}></div>
            <div className="fixed inset-x-0 flex flex-wrap bottom-8 justify-center">
                <div className=" inset-x-0 flex gap-5 flex-wrap bottom-8 justify-center px-8 py-2 bg-white rounded-full">
                    <button onClick={handleclick} className="btn bg-green-600 text-white  px-4 py-0.5  rounded-3xl">Green</button>
                    <button onClick={handleclick} className="btn bg-pink-300 text-white  px-4 py-0.5  rounded-3xl">Pink</button>
                    <button onClick={handleclick} className="btn bg-orange-600 text-white  px-4 py-0.5  rounded-3xl">Orange</button>
                    <button onClick={handleclick} className="btn bg-black text-white  px-4 py-0.5  rounded-3xl">Black</button>
                    <button onClick={handleclick} className="btn bg-red-600 text-white  px-4 py-0.5  rounded-3xl">Red</button>
                </div>
            </div>
        </>
    )
}

export default Bgchanger