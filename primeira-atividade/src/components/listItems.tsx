import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppDispatch, RootState } from "../redux/store";
import { removeItem } from "../redux/slices/todolist.slice";
import { useDispatch } from 'react-redux';

export default function ItemsList() {
    const items = useSelector((state: RootState) => state.todolist.items);
    const dispatch = useDispatch<AppDispatch>();

    function RemoveItem(name: any) {
        dispatch(removeItem(name));
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr>
                                <th scope="row">{item.name}</th>
                                <th>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => RemoveItem(item.name)}
                                    >
                                        Remove
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}