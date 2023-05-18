const ADD_TODO = 'addTodo'
const TOGGLE_TODO = 'toggleTodo'
const SEARCH_TODO = 'searchTodo'
const FILTER_STATUS = 'filterStatus'
const FILTER_PRIORITIES = 'filterPriorities'


const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

const toggleTodo = todoIds => {
    return {
        type: TOGGLE_TODO,
        payload: todoIds
    }
}

const searchTodo = searchText => {
    return {
        type: SEARCH_TODO,
        payload: searchText
    }
}

const filterStatus = statusText => {
    return {
        type: FILTER_STATUS,
        payload: statusText
    }
}

const filterPriorities = priorities => {
    return {
        type: FILTER_PRIORITIES,
        payload: priorities
    }
}


export {
    ADD_TODO,
    SEARCH_TODO,
    FILTER_STATUS,
    TOGGLE_TODO,
    FILTER_PRIORITIES,
    addTodo,
    searchTodo,
    filterStatus,
    toggleTodo,
    filterPriorities
}