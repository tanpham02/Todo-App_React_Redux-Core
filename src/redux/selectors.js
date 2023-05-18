import { createSelector } from 'reselect'

const todoListSelectors = state => state.todoLists
const filterStatusSelectors = state => state.filters.status
const filterSearchSelectors = state => state.filters.search
const filterPrioritiesSelectors = state => state.filters.priorities

const todoSelectors = createSelector(
    todoListSelectors,
    filterStatusSelectors,
    filterSearchSelectors,
    filterPrioritiesSelectors,
    (todoLists, status, search, priorities) => {
        const todoRemainings = todoLists.filter(todo => {
            if (status === 'All') {
                return priorities.length ?
                    (todo.name.toLowerCase().includes(search.toLowerCase()) &&
                        priorities.includes(todo.priority)) :
                    todo.name.toLowerCase().includes(search.toLowerCase())
            }

            return (
                todo.name.toLowerCase().includes(search.toLowerCase()) &&
                (status !== 'All' &&
                    (status === 'Completed' ?
                        todo.completed :
                        !todo.completed) &&
                    (priorities.length ?
                        priorities.includes(todo.priority) :
                        true)
                )
            )
        })
        return todoRemainings
    }
)


export { todoSelectors }