import { redirect } from "react-router-dom";

export function action() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('expiration');
    return redirect('/login')
}