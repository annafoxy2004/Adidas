import { useAuth } from '../../context/auth/AuthContextProvider';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
    const { handleLogin, setError, error } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleAuth() {
        let formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        handleLogin(formData, email, navigate)
    }

    useEffect(() => {
        setError(false)
    }, [])

    return error?(
       <h2>{error}</h2>
    ):(
        <div>
        <h1>Login</h1>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => handleAuth()}>Login</button>
    </div>
    )
};

export default LoginPage;