import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "react-bootstrap/Button";
function Login() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/");
    }, [user, loading, navigate]);
    return (
        <div className="login">

            {!user && <button className="login__btn login__google" onClick={signInWithGoogle}>
                Login with Google
            </button>}

            {user && <div>{user.displayName}<Button variant="outline-dark" onClick={logout}>LogOut</Button></div>}

        </div>
    );
}
export default Login;
