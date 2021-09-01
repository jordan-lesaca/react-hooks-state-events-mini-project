import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleOnSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({ text, category })
    setText("")
    setCategory("Code")
  }

  function handleOnChange(e){
    setText(e.target.value)
  }

  function handleOnCategoryChange(e){
    setCategory(e.target.value)
  }

  return (
    <form onSubmit={handleOnSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" value={text} onChange={handleOnChange} />
      </label>
      <label>
        Category
        <select value={category} onChange={handleOnCategoryChange}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
