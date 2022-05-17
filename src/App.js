import './App.css';
import Counter from './components/Counter'
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo/>
      <br/>
      <br/>
      <TodoItem />
    </div>
  );
}

export default App;
