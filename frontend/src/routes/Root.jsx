import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Messages from '../components/Messages';
import { API_BASE } from "../constants";
import Foot from "./Foot"


export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    fetch(API_BASE + '/api/user', { credentials: "include" })
      .then(res => res.json())
      .then(res => setUser(res.user));
  }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMessages({});
      }
    }
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className="backG">
      <header className="container shadow mb-5">
        <div className="text-center">
          <h1 className="mt-3">((( Cloud Sounds )))</h1>
          {/* <span className="">We love Muzac</span> */}
          
          <Link className="btn btn-warning mx-2 my-2 fw-bold" to="/login">Login</Link>
          <Link className="btn btn-warning mx-2 my-2 fw-bold" to="/signup">Signup</Link>
          <Link className="btn btn-warning mx-2 my-2 fw-bold" to="/feed">Feed</Link>
          <Link className="btn btn-warning mx-2 my-2 fw-bold" to="/profile">Profile</Link>
          <Link to="/logout" className="btn btn-warning mx-2 my-2 fw-bold">Logout</Link>
        </div>
        
      </header>
      
			<Messages messages={messages} />
      <Outlet context={{ user, setUser, setMessages }} />
      <Foot />
    </div>
  );
}
