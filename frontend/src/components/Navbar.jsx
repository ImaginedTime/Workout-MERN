import React from "react";
import useLogOut from "../hooks/useLogOut";

import { useAuthContext } from "../hooks/useAuthContext";

import { Link } from "react-router-dom";

export default function Navbar() {
    const { logout } = useLogOut();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user ? (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log Out</button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">Log In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
