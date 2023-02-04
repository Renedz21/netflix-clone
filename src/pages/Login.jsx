import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container{
        gap: 2rem;
        height: 85vh;
        .form{
            padding: 2rem;
            background-color: #000000b0;
            width: 25vw;
            height:40vh;
            gap:2rem;
            color:white;
            .title{
                font-size: 1.5rem;
            }
            .container{
                gap: 2rem;
                input{
                    padding: 0.5rem 1rem;
                    width: 20vw;
                }
                button{
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    cursor: pointer;
                    color: #ffffff;
                    border-radius: 0.2rem;
                    font-weight: bolder;
                    font-size: 1.05rem;
                }
            }
        }
    }
  }
`;

const Login = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) navigate("/");
    });

    return (
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Sign In</h3>
                        </div>
                        <div className="container flex column">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <button onClick={handleLogin}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;
