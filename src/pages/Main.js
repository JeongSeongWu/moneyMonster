import React, { useState } from "react";
import styled from "styled-components";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSignInModal } from "../app/store.js";


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
    cursor: pointer;
`

function Main() {
    // Redux store에 있던 state가 남음
    let openSignIn = useSelector(state => state.openSignIn.open);
    
    console.log('openSignIn', openSignIn);
    
    
    let dispatch = useDispatch();
    

    /**
     * onClick={() => { dispatch(openSignInModal) }}
     */

    const openModal = () => {
        dispatch(openSignInModal);

        console.log('openSignIn 2', openSignIn)
    }




    
    return(
        <Container>
            <Header> 
                <Nav>
                    <Title>
                        PAPER AQUARIUM
                    </Title>
                    <ButtonContainer>
                        <NavBtn onClick={() => {dispatch(openSignInModal())}}>SignIn</NavBtn>
                        <NavBtn>SignUp</NavBtn>
                    </ButtonContainer>
                </Nav>
            </Header>
            {openSignIn ?
            <ModalBackground>
                <Login></Login>
            </ModalBackground>
            :
            ""}
            
        </Container>
    )
}

export default Main