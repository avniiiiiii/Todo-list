import React, { useState } from "react";

function MyComponent() {
  const [tasks, setTasks] = useState([
    "eat the breakfast",
    "Walk the dog",
    "take hot shower",
  ]);
  const [newtask, setNewtask] = useState("");
  function handleInputChange(event) {
    setNewtask(event.target.value); //ki hum input field mei kuch type krpaaye aur vo vahan dikhe
  }
  function addTask() {
    //agar input field mei kuch na likhkr we press add btn toh add btn kuch add nahi krega
    if (newtask.trim() != "") {
      setTasks((t) => [...t, newtask]);
    }
  }
  function deleteTask(index) {
    const updatedTask = tasks.filter((element, idx) => idx != index);
    setTasks(updatedTask);
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      //if our element is at bottom we dont want to move any further
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ]; //to swap the priority
      setTasks(updatedTasks);
    }
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ]; //to swap the priority
      setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="todo-container">
        <h1>TO-DO List</h1>
        <input
          type="text"
          value={newtask}
          placeholder="enter your task"
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add me
        </button>
        <ol>
          {tasks.map(
            (
              task,
              index //what would i like to do with each element(task), create a list item
            ) => (
              <li key={index}>
                {/* btw span , we have each task  */}
                <span className="text">{task} </span>
                <button className="del-btn" onClick={() => deleteTask(index)}>
                  Delete me
                </button>
                <button className="move-btn" onClick={() => moveTaskUp(index)}>
                  Up
                </button>
                <button
                  className="down-btn"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
              </li>
            )
          )}
        </ol>
      </div>
    </>
  );
}

export default MyComponent;
