import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import TasksList from "./components/TasksList";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Form />
        <TasksList />
      </Main>
    </div>
  );
}
