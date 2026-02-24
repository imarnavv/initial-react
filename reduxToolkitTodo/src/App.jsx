
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/todos'

function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <h1>Redux Toolkit Todo</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
