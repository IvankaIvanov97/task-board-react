import React from 'react'
import TaskBlock from './TaskBlock'

function Task() {
  return (
    <section className='py-4'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <TaskBlock title="Title for first block" description="This is description for this block" status="done" />
            <TaskBlock title="Title for second block" description="Very big decription for block. This test for check height block" status="inProgress" />
            <TaskBlock title="Title for third block" description="Description 3" status="toDo" />
            <TaskBlock title="Title for fourth block" description="Description 4" status="done" />
        </div>
    </section>
  )
}

export default Task