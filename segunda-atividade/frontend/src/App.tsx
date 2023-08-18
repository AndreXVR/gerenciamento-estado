import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchProdutos } from "./redux/slices/api.slice.produtos";
import ProdutosList from "./components/listProdutos";
import "./index.css";
import NavBarCustom from "./components/navbar";

function App() {

  const { loading } = useSelector((state: RootState) => state.apiProduto);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProdutos());
  }, []);

  return (<div>
    <div style={{ width: "100%" }}>
      <NavBarCustom />
    </div>
    <div className="container" style={{ justifyContent: "start" }}>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div style={{ overflow: "scroll", height: "400px" }}>
            <ProdutosList />
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default App;
