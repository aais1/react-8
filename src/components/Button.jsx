/* eslint-disable react/prop-types */

function Button({onclick}) {
    return (
        <div className="text-center">
        <button className='hover:bg-black hover:text-white duration-150 shadow-2xl border-2 border-black w-[70%] mx-auto mt-5  p-2 text-black'
        onClick={()=>{onclick()}}>Add New</button>
        </div>
    )
}

export default Button
