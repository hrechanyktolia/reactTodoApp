import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
        <h1 className="title">Todo App</h1>
        <Todos/>
        <DisplayTodos/>
    </div>
  );
}

export default App;
