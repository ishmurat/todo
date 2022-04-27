import React from 'react'
import TodoItem from './TodoItem'


const todos = [
    {   
        id: 'wert13',
        title: 'Finish the essay collaborations',
        isComplited: false,
    },
    {
        id: 'wert14',
        title: 'Read next chapter of boo',
        isComplited: false,
    },
    {
        id: 'wert15',
        title: 'Send the finished assigment',
        isComplited: false,
    },
]  
const Home = () => {
    return(
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}
export default Home