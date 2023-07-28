import { useEffect } from "react";
import Signup from "../components/Signup";
import {
    json, useNavigate, useRouteLoaderData, redirect
} from "react-router-dom";

function AuthSignup() {

    const navigate = useNavigate();
    const token_data = useRouteLoaderData('root');

    useEffect(() => {
        if (token_data.token !== null) {
            navigate('/');
        }
    }, [navigate, token_data])

    return <Signup />;
}


export default AuthSignup;


export async function action({ request }) {

    const data = await request.formData();

    const AuthSignupData = {
        email: data.get("email"),
        username: data.get("username"),
        password: data.get("password"),
    }

    const response = await fetch("http://localhost:8000/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(AuthSignupData),
    })

    if (response.status === 422 || response.status === 401 || response.status === 400) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not register the user.' }, { status: 500 });
    }

    const responseData = await response.json();

    localStorage.setItem('token', responseData.access_token);
    localStorage.setItem('username', responseData.username);
    localStorage.setItem('email', responseData.email);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return redirect('/');

}


