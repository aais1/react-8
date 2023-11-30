/* eslint-disable no-unused-vars */
import Header from './components/Header.jsx';
import Addtask from "./components/Addtask.jsx";
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';

function App() {
  const [ShowAddTask, setShowAddTask] = useState(true);
  const [Reminder, setReminder] = useState(true);
  const [Task, setTask] = useState('');
  const [DateTime, setDayTime] = useState('');
  const [Alltasks, setAllTasks] = useState([]);

  function handleClick() {
    setShowAddTask(!ShowAddTask);
  }

  function addTask() {
    const id = Math.floor(Math.random() * 100000) + 1;
    if (Task !== '' || DateTime !== '') {
      const newTask = { id, text: Task, day: DateTime, reminder: Reminder, completed: false };
      setAllTasks([newTask, ...Alltasks]);
      clearInput();
    } else {
      alert('Please Enter Task and Day and Time');
    }
  }

  function clearInput() {
    setTask('');
    setDayTime('');
  }

  function removeTask(key) {
    setAllTasks(Alltasks.filter((task) => task.id !== key));
  }

  function completeTask(task) {
    setAllTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === task.id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function OnChangetask(e) {
    setTask(e.target.value);
  }

  const buttonText = ShowAddTask ? 'Close' : 'Add';
  const buttonColor = ShowAddTask ? 'red' : 'green';




  return (
    <>
      <div className="w-[100vw] sm:w-[70vw] md:w-[60vw] m-auto my-[10px]">
        <div className='border-blue-100 border-2 p-4 shadow-2xl'>

          <Header onClick={handleClick} color={buttonColor} text={buttonText} />

          {ShowAddTask &&
            <Addtask reminder={Reminder} setReminder={setReminder} setTask={setTask} onclick={addTask}
              setDayTime={setDayTime} task={Task} dateTime={DateTime} />
          }

          <Tasks tasks={Alltasks} removeTask={removeTask} completeTask={completeTask} />
        </div>
      </div>
    </>
  );
}

export default App;
