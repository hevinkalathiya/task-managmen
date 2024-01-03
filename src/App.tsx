import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="">
        <h1 className="flex items-center justify-center text-3xl p-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500">
          Task-Managment
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
