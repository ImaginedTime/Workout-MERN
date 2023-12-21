import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function WorkoutForm() {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user){
            setError("You must be logged in to add a workout!");
            return;
        }

        const workout = { title, load, reps };

        const response = await fetch("https://workout-mern-production.up.railway.app/api/workouts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
            body: JSON.stringify(workout),
        });
        const data = await response.json();

        if (!response.ok) {
            setError(data.error);
            setEmptyFields(data.emptyFields);
        }

        if (response.ok) {
            setTitle("");
            setLoad("");
            setReps("");
            setError(null);
            setEmptyFields([]);
            console.log("New workout added!");
            dispatch({ type: "CREATE_WORKOUT", payload: data });
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input
                type="text"
                className={emptyFields.includes("title") ? "error" : ""}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Load (kg):</label>
            <input
                type="number"
                className={emptyFields.includes("load") ? "error" : ""}
                value={load}
                onChange={(e) => setLoad(e.target.value)}
            />

            <label>Reps:</label>
            <input
                type="number"
                className={emptyFields.includes("reps") ? "error" : ""}
                value={reps}
                onChange={(e) => setReps(e.target.value)}
            />

            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
