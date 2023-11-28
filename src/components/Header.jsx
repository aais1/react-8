/* eslint-disable react/prop-types */

function Header({onClick,color,text}) {

    return (
        <>
        <div className="w-[100%]] flex justify-between">
            <div>
                <h1 className="text-green-500 text-3xl font-bold">Task Tracker</h1>
            </div>
            <div>
                <button
                    className={`py-2 px-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white duration-150 font-bold rounded-lg`}
                    onClick={() => onClick()}
                >
                {text}
                </button>
            </div>
        </div>  
        </>
    );
    
    }
export default Header;