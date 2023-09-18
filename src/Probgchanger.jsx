import { useState } from "react"

const Probgchanger = () => {
    const [color, setcolor] = useState("rgb(251,200,0)")
    const colors = [
        { name: "Green", color: "green" },
        { name: "Pink", color: "pink" },
        { name: "Orange", color: "orange" },
        { name: "Blue", color: "blue" },
        { name: "Red", color: "red" },
    ]
    const handlecolor = (newcolor) => {
        setcolor(newcolor)

    }
    return (
        <><h3 className="text-center font-bold bg-black text-white text-xl">Bg Changer</h3>

            <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}></div>
            <div className="fixed gap-8 bg-white w-2/4 py-2 rounded-3xl  mx-auto inset-x-0 flex flex-wrap bottom-8 justify-center">
                {colors.map((coloroptions) => (
                    <button
                        key={coloroptions.color}
                        onClick={() => handlecolor(coloroptions.color)} className={`btn bg-${coloroptions.color}-600  bg-bl text-white px-4 py-0.5 rounded-3xl`}
                    >
                        {coloroptions.name}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Probgchanger