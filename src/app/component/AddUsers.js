// components/AddUser.js
"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import Link from "next/link";

export default function AddUser() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const userDispatch = () => {
        dispatch(addUser(name));
    };

    return (
        <div className="add-user">
            <h2>Add User</h2>
            <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                className="add-user-input"
            />
            <button className="add-user-btn" onClick={userDispatch}>
                Submit
            </button>

            <br>
                
            </br>

            <Link href="/removeuser">Go to userList Page</Link>
        </div>
    );
}
