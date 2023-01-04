import axios from "axios";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ApiFetch() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const user = { name, age };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://63b58eee0f49ecf508a90829.mockapi.io/names", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            let resJson = await res.json();
            console.log('RES', resJson);
            if (res.status === 200) {
                setName("");
                setAge("");
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <h1>Api Fetch and Post Data</h1>

            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label >
                    Name:
        </label><br />
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <label >
                    Age:
        </label><br />
                <input
                    type="text"
                    value={age}
                    required
                    onChange={(e) => setAge(e.target.value)}
                /><br />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div >
    )
}
export default ApiFetch;