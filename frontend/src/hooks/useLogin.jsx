import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://workout-mern-production.up.railway.app/api/user/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }

        if (response.ok) {
            // save the user to local Storage
            localStorage.setItem("user", JSON.stringify(data));

            // update the auth context
            dispatch({ type: "LOGIN", payload: data });

            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
}
