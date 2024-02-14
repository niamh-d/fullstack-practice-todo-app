import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";
import StatsView from "./components/StatsView";
import ErrorModal from "./components/ErrorModal";
import FormInfoModal from "./components/FormInfoModal";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <StatsView />
        <Form />
        <FormInfoModal />
        <AddModal />
        <DeleteModal />
        <ErrorModal />
        <TasksList />
      </Main>
    </div>
  );
}
