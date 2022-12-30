import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { openSignInModal, openSignUpModal } from "../app/store.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    /* box-shadow: 0px 0px 2px #e2e2e2; */
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
    /* color: #ffffff; */
    color: #0057A1;
    font-size: 20px;
    font-weight: 450;
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
    /* color: #ffffff; */
    color: #0057A1;
    cursor: pointer;
`

function Header() {

    let dispatch = useDispatch();

    return (
        <Container>
            <Nav>
                <Title>
                    AQUARIST
                </Title>
                <ButtonContainer>
                    <NavBtn onClick={() => {dispatch(openSignInModal())}}>SignIn</NavBtn>
                    <NavBtn onClick={() => {dispatch(openSignUpModal())}}>SignUp</NavBtn>
                </ButtonContainer>
            </Nav>
        </Container>
    )
}

export default Header