import React, { useState } from "react";
import Heading from "./components/header";

function App() {
  const [item, setItem] = useState("");
  const [toDoList, setTodoList] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function updateTask(event) {
    const updatedTodoList = [...toDoList];
    if (selectedTaskIndex !== null) {
      updatedTodoList[selectedTaskIndex] = item;
    } else {
      updatedTodoList.push(item);
    }
    setTodoList(updatedTodoList);
    setItem("");
    setSelectedTaskIndex(null);
    event.preventDefault();
  }

  function deleteTask(index) {
    const updatedTodoList = [...toDoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  }

  function editTask(index) {
    setSelectedTaskIndex(index);
    setItem(toDoList[index]);
  }

  return (
    <div>
      <Heading />
      <div className="flex flex-wrap justify-center font-montserrat">
        <div className="bg-white w-6/12 mt-10 flex flex-col rounded-sm ">
          <h1 className="my-5 text-xl font-semibold text-center">
            Today's Task
          </h1>
          <form>
            <input
              onChange={handleChange}
              type="text"
              placeholder={
                selectedTaskIndex !== null ? "Edit task" : "Add new task"
              }
              className="text-center w-9/12 mb-5 border-b-2 ml-5 focus:outline-none"
              value={item}
            />
            <button
              className="ml-10 border px-3 rounded-md"
              onClick={updateTask}
            >
              {selectedTaskIndex !== null ? "Save" : "Add"}
            </button>
          </form>
          <ul className="ml-20 mt-2">
            {toDoList.map((task, index) => (
              <li
                key={index}
                className="my-3 flex align-middle justify-between"
              >
                {task}
                <div className="mr-10">
                  <button
                    className="bg-blue-500 text-white rounded-sm mx-1 p-1"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white rounded-sm ml-1 p-1"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
