"use client"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function Page(){
    const userData = useSelector((data)=>data.user);
    const dispatch = useDispatch();
    console.log(userData);
    return(
        <div className="display-user">
            <h2>This page is user list</h2>

            {
                userData.map((item)=>(
                    <div className="user-item">
                        <span>{item.name}</span>
                        <button onClick={()=>dispatch(removeUser(item.name))}>Remove</button>
                    </div>
                ))
            }

            <br />
            <Link href="/">Go to Home Page</Link>
        </div>
    )
}