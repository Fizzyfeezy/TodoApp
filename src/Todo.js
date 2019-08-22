import React from 'react'

function Todo({todos, deleteTodo}) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className = 'collection-item' key = {todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div>
            <p className = 'center'>You have no todo's left!!!!</p>
        </div>
    )
    return (
        <div className = 'todo collection'>
            {todoList}
        </div>
    )
}

export default Todo
