import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./components/listItems";
import FormItem from "./components/formItem";


function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
    }}>
      <div style={{ width: "50%" }}>
        <FormItem/>
        <hr></hr>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
