/* eslint-disable react/prop-types */
import Button from './Button';

function AddTask({reminder,setReminder,setTask,onclick,setDayTime,task,dateTime}) {
  return (
    <>
        <div className="">
          <div className="mt-3 flex flex-col">
            <label htmlFor="" className="mb-1 font-bold">
              Task :
            </label>
            <input
              type="text"
              placeholder="Enter Task"
              className="border-2 p-1"
              onChange={(e) => {setTask(e.target.value)}}
              value={task}
            />
          </div>
          <div className="mt-3 flex flex-col">
            <label htmlFor="" className="mb-1 font-bold">
              Day & Time :
            </label>
            <input
              type="text"
              placeholder="Enter Day and Time"
              className="border-2 p-1"
              onChange={(e) => {setDayTime(e.target.value)}}
              value={dateTime}
            />
          </div>
          <div className="mt-3 flex gap-16">
            <label htmlFor="" className="font-bold">
              Set Reminder :
            </label>
            <input type="checkbox"
             placeholder="Reminder"
             className='w-4'
             checked={reminder}
             onChange={() => {setReminder(!reminder)}}  />
          </div>
          <Button onclick={onclick}/>
        </div>
      
    </>
  );
}

export default AddTask;