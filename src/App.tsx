import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="">
        <h1 className="m-auto text-3xl p-5 font-bold text-gray-700">
        Task-Managment
      </h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
