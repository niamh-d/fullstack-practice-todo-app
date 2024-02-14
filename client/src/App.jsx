import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Form />
        <AddModal />
        <DeleteModal />
        <TasksList />
      </Main>
    </div>
  );
}
