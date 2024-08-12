"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function DisplayaUser() {
    const userData = useSelector((data) => data.user);
    const dispatch = useDispatch();
    console.log(userData);
    return (
        <div className="display-user">
            <h2>Display Users List</h2>
            {
                userData.map((item)=>(
                    <div className="user-item">
                        <span>{item.name}</span>
                        <button onClick={()=>dispatch(removeUser(item.name))}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}