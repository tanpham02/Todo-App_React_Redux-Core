import {
    ADD_TODO,
    SEARCH_TODO,
    FILTER_STATUS,
    TOGGLE_TODO,
    FILTER_PRIORITIES
} from "./actions"


const initState = {
    todoLists: JSON.parse(localStorage.getItem('todoLists')) ?? [],
    filters: {
        search: '',
        status: 'All',
        priorities: []
    },
}


const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoLists: [
                    ...state.todoLists,
                    action.payload
                ]
            }
        case SEARCH_TODO:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }

        case FILTER_STATUS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }

        case TOGGLE_TODO:
            const newTodoLists = state.todoLists.map((todo, index) => {
                return (action.payload.length && action.payload.includes(index) ?
                    { ...todo, completed: true } :
                    { ...todo, completed: false })
            })

            return {
                ...state,
                todoLists: [...newTodoLists]
            }


        case FILTER_PRIORITIES:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priorities: [...action.payload]
                }
            }

        default:
            return state
    }
}

export default rootReducer