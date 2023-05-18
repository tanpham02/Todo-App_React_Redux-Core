import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState, useRef, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo } from '../../redux/actions'
import { todoSelectors } from '../../redux/selectors';

export default function TodoList() {
  const dispatch = useDispatch()
  const todoLists = useSelector(todoSelectors)
  const inputRef = useRef()
  const [checked, setChecked] = useState([])
  const [todo, setTodo] = useState({
    name: '',
    priority: 'Medium',
    completed: false
  })
  
  const handleClickAdd = () => {
    dispatch(addTodo(todo))
    setTodo(prev => ({
      ...prev,
      name: '',
      priority: 'Medium'
    }))
    inputRef.current.focus()

    const newTodo = JSON.parse(localStorage.getItem('todoLists')) ?? []
    newTodo.push(todo)
    localStorage.setItem('todoLists', JSON.stringify(newTodo))
  }

  const onClick = useCallback((e) => {
    const checkUniqueId = checked.includes(e)
    setChecked(prev => {
      if (checkUniqueId) {
        return checked.filter(check => check !== e)
      }
      return [...prev, e]
    })
  }, [checked])

  useEffect(() => {
    dispatch(toggleTodo(checked))
  }, [checked])

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoLists?.map((todo, index) =>
          <Todo
            key={todo.name}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
            id={index}
            onClick={onClick}
          />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            ref={inputRef}
            value={todo.name}
            onChange={e => setTodo(prev => ({
              ...prev,
              name: e.target.value
            }))}
          />
          <Select
            defaultValue="Medium"
            value={todo.priority}
            onChange={value => setTodo(prev => ({
              ...prev,
              priority: value
            }))}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type='primary'
            onClick={handleClickAdd}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
