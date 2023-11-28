/* eslint-disable no-unused-vars */
import Header from './components/Header.jsx'
import Addtask from "./components/Addtask.jsx";
import Tasks from './components/Tasks.jsx';
import { useState , useEffect} from 'react';

function App() {

  const [ShowAddTask,setShowAddTask]=useState(true);
  const [Reminder,setReminder]=useState(true);
  const [Task,setTask]=useState('');
  const [DateTime,setDayTime]=useState('');

  const [Alltasks,setAllTasks]=useState([
    { id: 1, text: 'Example Task 1', day: 'Monday', reminder: false },
    { id: 2, text: 'Example Task 2', day: 'Tuesday', reminder: true },
    { id: 3, text: 'Example Task 3 ', day: 'Monday', reminder: false },
  ]);
  
  function handleClick(){
    setShowAddTask(!ShowAddTask);
  }

  function addTask() {
    const id = Math.floor(Math.random() * 10000) + 1;
    if (Task !== '' || DateTime !== '') {
      const newTask = { id, text: Task, day: DateTime, reminder: Reminder };
      setAllTasks([newTask, ...Alltasks]);
      clearInput(); // Move clearInput here
    } else {
      alert('Please Enter Task and Day and Time');
    }
  }
  

  function clearInput() {
    setTask('');
    setDayTime('');
  }
  
  function removeTask(key){
    console.log('gi');
    setAllTasks(Alltasks.filter((task)=>task.id!==key))
  }



  function OnChangetask(e){
    setTask(e.target.value);
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
      <Addtask reminder={Reminder} setReminder={setReminder} setTask={setTask} onclick={addTask}
       setDayTime={setDayTime} task={Task} dateTime={DateTime} />
      }

      <Tasks tasks={Alltasks} removeTask={removeTask}/>
      
      </div>
    </div>
    </>
  )
}

export default App
