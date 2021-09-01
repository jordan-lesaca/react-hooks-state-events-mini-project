import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectCategory, setSelectCategory] = useState("All")

  const categoryList = CATEGORIES.filter((category) => category !== "All")

  function handleDeleteTask(deleteTaskText){
    setTasks(tasks.filter((task) => task.text !== deleteTaskText))    
  }

  function handleAddTask(newTasks){
    setTasks([...tasks, newTasks])
  }

  const tasksDisplay = tasks.filter(
    (task) => selectCategory === "All" || task.category === selectCategory
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      
      <CategoryFilter 
      categories={CATEGORIES} 
      selectCategory={selectCategory} 
      onSelectCategory={setSelectCategory} />
      
      <NewTaskForm 
      categories={categoryList}
      onTaskFormSubmit={handleAddTask}/>

      <TaskList 
      tasks={tasksDisplay} 
      onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
