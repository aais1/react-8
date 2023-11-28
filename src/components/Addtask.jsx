/* eslint-disable react/prop-types */
import Button from './Button';

function AddTask({reminder,setReminder}) {
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
            />
          </div>
          <div className="mt-3 flex gap-20">
            <label htmlFor="" className="font-bold">
              Set Reminder :
            </label>
            <input type="checkbox"
             placeholder="Reminder"
             checked={reminder}
             onChange={() => {setReminder(!reminder)}}  />
          </div>
          <Button/>
        </div>
      
    </>
  );
}

export default AddTask;
