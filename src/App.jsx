import Header from './components/Header.jsx'
import Addtask from "./components/Addtask.jsx";
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';

function App() {

  const [ShowAddTask,setShowAddTask]=useState(true);
  const [Reminder,setReminder]=useState(true);

  const [Alltasks,setAllTasks]=useState([
    { id: 1, text: 'Example Task 1', day: 'Monday', reminder: false },
    { id: 2, text: 'Example Task 2', day: 'Tuesday', reminder: true },
    { id: 1, text: 'Example Task 1 ', day: 'Monday', reminder: false },
  ]);
  
  function handleClick(){
    setShowAddTask(!ShowAddTask);
  }
  return (
    <>
    <div className="w-[100vw] sm:w-[70vw] md:w-[60vw] m-auto my-[10px]">
      <div  className='border-blue-100 border-2 p-4 shadow-2xl'>
      {
      (ShowAddTask)?
      <Header onClick={handleClick} color={'red'} text={'Close'}/>
      :<Header onClick={handleClick} color={'green'} text={'Add'}/>
      }

      { ShowAddTask &&
      <Addtask reminder={Reminder} setReminder={setReminder}/>
      }

      <Tasks tasks={Alltasks}/>
      
      </div>
    </div>
    </>
  )
}

export default App
