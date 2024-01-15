import React from 'react'
import TaskBoardImg from "../../assets/img/TaskBoard.svg";

function Header() {
  return (
    <header className='py-4 shadow-lg'>
        <div className="container flex justify-between">
            <img className='w-48' src={TaskBoardImg} alt="" />
            <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'>Create Task</button>
        </div>
    </header>
  )
}

export default Header