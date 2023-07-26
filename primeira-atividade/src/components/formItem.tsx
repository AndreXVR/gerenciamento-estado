import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/todolist.slice";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

export default function FormularioItem() {
    const dispatch = useDispatch();

    const [inputItem, SetItem] = useState({
        name: "",
    });

    const handleInput = (e: any) => {
        SetItem({ ...inputItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addItem(inputItem));
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3 className="mt-3">Add new item to TODO List</h3>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">Name</label>
                    <div className="col-md-8">
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={inputItem.name}
                            onChange={handleInput} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label"></label>
                    <div className="col-md-1">
                        <button type="submit"
                            className="btn btn-primary btn-lg">
                            ADD
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
