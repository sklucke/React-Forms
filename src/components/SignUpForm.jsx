import React, {useState} from "react";

const SignUpForm = ({token, setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassWord] = useState("");
    const [error, setError] = useState(null);
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({username, password}),

                }
            );
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        } catch (error) {
          setError(error.message);
        }
        setUsername("");
        setPassWord("");
            
    }
    return (
       <div>
         <h2>Sign Up!</h2>
         {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange={(e) => setPassWord(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
       </div>



    );
    
};

export default SignUpForm