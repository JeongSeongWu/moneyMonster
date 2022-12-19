import React, { useState } from "react";
import styled from "styled-components";
import Login from "../components/Login";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;    
`

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 320px;
    background-color: #0057A1;
    padding: 10px;
    box-sizing: border-box;
`

const Nav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    color: #ffffff;
    font-size: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 10px;
`

const NavBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 20px;
    color: #ffffff;
`

function Main() {

    const [openSignIn, setOpenSignIn] = useState(false);

    const openModal = () => {
        setOpenSignIn(true)
    }
    return(
        <Container>
            <Header>
                <Nav>
                    <Title>
                        PAPER AQUARIUM
                    </Title>
                    <ButtonContainer>
                        <NavBtn onClick={openModal}>SignIn</NavBtn>
                        <NavBtn>SignUp</NavBtn>
                    </ButtonContainer>
                </Nav>
            </Header>
            {openSignIn ?
            <ModalBackground>
                <Login openSignIn={openSignIn} setOpenSignIn={setOpenSignIn}></Login>
            </ModalBackground>
            :
            ""}
            
        </Container>
    )
}

export default Main