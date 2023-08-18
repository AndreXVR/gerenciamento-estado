import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import ProdutosList from "./components/listProdutos";
import "./index.css";
import NavBarCustom from "./components/navbar";

function App() {

  return (<div>
    <div style={{ width: "100%" }}>
      <NavBarCustom />
    </div>
    <div className="container" style={{ justifyContent: "start" }}>
      <div>
        <div style={{ overflow: "scroll", height: "400px" }}>
          <ProdutosList />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
