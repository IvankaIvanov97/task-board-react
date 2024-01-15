import React from "react";

interface TaskInfo {
  title: string,
  description: string,
  status: "done" | "inProgress" | "toDo"
}

function TaskBlock({ title, description, status }: TaskInfo) {
  return (
    <div className="relative bg-sky-500 rounded p-3 h-full flex flex-col justify-between">
      <div className="mb-3">
        <p className="text-white text-center font-bold">{title}</p>
        <p className="text-white text-center">
          {description}
        </p>
      </div>
      <div className="flex gap-3 justify-end">
        <button className="block bg-sky-50 rounded p-1 hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-sky-50 transition duration-300 ease-in-out">
          Delete
        </button>
        <button className="block bg-sky-50 rounded p-1 hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-sky-50 transition duration-300 ease-in-out">
          Complete
        </button>
      </div>
    </div>
  );
}

export default TaskBlock;
