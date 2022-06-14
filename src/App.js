import logo from './logo.svg';
import './App.css';
import Todo from './components/todo/todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>To do list</h2>
      </header>
      <Todo />

    </div>
  );
}

export default App;
