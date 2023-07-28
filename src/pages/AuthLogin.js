import { useEffect } from "react";
import Login from "../components/Login";
import {
    json, useNavigate, useRouteLoaderData, redirect
} from "react-router-dom";

function AuthLogin() {

    const navigate = useNavigate();
    const token_data = useRouteLoaderData('root');

    useEffect(() => {
        if (token_data.token !== null) {
            navigate('/');
        }
    }, [navigate, token_data])


    return <Login />;
}


export default AuthLogin;


export async function action({ request }) {

    const data = await request.formData();

    const AuthLoginData = {
        username: data.get("username"),
        password: data.get("password"),
        grant_type: "password"
    }

    var formBody = [];
    for (var property in AuthLoginData) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(AuthLoginData[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const response = await fetch("http://localhost:8000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody,
    })

    if (response.status === 422 || response.status === 401 || response.status === 400) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not authenticate user.' }, { status: 500 });
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


