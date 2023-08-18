import { useDispatch, useSelector } from "react-redux";
import { Navbar, NavbarBrand } from "reactstrap";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { NavItem, NavLink } from "react-bootstrap";

export default function NavBarCustom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar
        style={{ position: "sticky", top: "0", backgroundColor: "lightblue" }}
      >
        <NavbarBrand>Loja Online</NavbarBrand>

        <NavItem onClick={() => navigate("/")}>
          <NavLink>Produtos</NavLink>
        </NavItem>

        <NavItem onClick={() => navigate("/cart")}>
          <NavLink>Carrinho</NavLink>
        </NavItem>

      </Navbar>
    </div>
  );
}
