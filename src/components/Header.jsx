import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    padding: 0 4rem;
    .logo{
        img{
            height: 5rem;
        }
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
`

const Header = ({ login }) => {

    const navigate = useNavigate()

    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <button
                onClick={() => navigate(login ? "/login" : "/signup")}
            >
                {login ? "Login" : "Sign Up"}
            </button>
        </Container>
    )
}

export default Header