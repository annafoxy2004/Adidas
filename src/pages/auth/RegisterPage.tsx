import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContextProvider, { useAuth } from "../../context/auth/AuthContextProvider";
import Loader from "../../components/loader/Loader";

export default function RegisterPage() {
  const navigate = useNavigate()
    const { handleRegister, error, setError, loading} = useAuth()
    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const [ password_confirm, setPasswordConfirm ] = React.useState('')

    function handleSave () {
        if (!email.trim() || !password.trim() || !password_confirm.trim()) {
            alert('Some inputs are empty!')
            return
        } else {
            let formData = new FormData()
            formData.append('email', email)
            formData.append('password', password)
            formData.append('password_confirm', password_confirm)
            handleRegister(formData, navigate)
        }
    }

    React.useEffect(() => {
        setError(false)
    }, [])

    if(loading) {
        return <Loader/>
    }
    return (
        <div>
            <h1>Register</h1>
            {error ? <h2>{error}</h2> : null}
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" onChange={(e) => setPasswordConfirm(e.target.value)}/>
            <button onClick={() => handleSave()}>Register</button>
        </div>
    );
}
