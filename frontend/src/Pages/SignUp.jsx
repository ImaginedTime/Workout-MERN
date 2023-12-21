import React, { useState } from "react";
import useSignUp from "../hooks/useSignUp";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup, error, isLoading } = useSignUp();

    const handleSubmit = async (e) => { 
        e.preventDefault();

        await signup(email, password);
    };

    return (
        <form className="sign-up" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email:</label>
            <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button type="submit" disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
