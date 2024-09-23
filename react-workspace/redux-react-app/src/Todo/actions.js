export const addTodo = (id, text) => ({
    id,
    text,
    type: 'ADDTODO'
})

export const removeTodo = (id) => ({
    id,
    type: 'REMOVETODO'
})