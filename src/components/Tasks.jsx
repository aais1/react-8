/* eslint-disable react/prop-types */
function Tasks({tasks,removeTask}) {
    return (
        <div className='mt-8'>
        {
            tasks.map((task)=>{
                return(
                    <div key={task.id} className="border-2 p-2 mt-5 flex justify-between">
                        <div className="flex flex-col">
                            <h3 className="font-bold">{task.text}</h3>
                            <p>{task.day}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className=" border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500 font-bold py-1 px-3 rounded-lg duration-150"
                            onClick={()=>{}}>Edit</button>

                            <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold  py-1 px-2 rounded-md duration-150"
                            onClick={()=>{removeTask(task.id)}}>Delete</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Tasks
