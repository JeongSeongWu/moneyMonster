import React, { useState } from "react";
import styled from "styled-components";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSignInModal, openSignUpModal } from "../app/store.js";



const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    
`
const HeaderCover = styled.div`
    width: 100%;
    /* box-shadow: 0px 0px 2px #e2e2e2; */
`

const MainBackground = styled.div`
    width: 99.9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 920px;   
`
const ActionBtnContainer = styled.div`
    display: flex;
    width: 400px;
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
`
const GatheringBtn = styled.button`

    :root {
        --text-color: hsla(210, 50%, 85%, 1);
        --shadow-color: hsla(210, 40%, 52%, .4);
        --btn-color: hsl(210, 80%, 42%);
        --bg-color: #141218;
    }

    position: relative;
    display: flex;
    justify-content: center;
    border: 3px solid #0057A1;
    align-items: center;
    width: 100%;
    height: 110px;
    border-radius: 8px;
    color: #fff;
    font-family: "Source Code Pro";
    font-weight: 900;
    text-transform: uppercase;
    font-size: 30px;
    z-index: 0;
    background: #0057A1;
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    /* background: linear-gradient( to bottom, #0057A1, #1C3775 ); */
    ::after {
        font-weight: 200;
        top: -30px;
        left: -20px;
    }
    
    ::before {    
        content: '';
        pointer-events: none;
        opacity: .6;
        background:
            radial-gradient(circle at 20% 35%,  transparent 0,  transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
            radial-gradient(circle at 75% 44%, transparent 0,  transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
            radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px);
        width: 100%;
        height: 300%;
        top: 0;
        left: 0;
        position: absolute;
        animation: bubbles 5s linear infinite both;
    }
    :hover div:nth-child(2)::after {
        transform: translate(0, -47%) rotate(0deg)
    }
    div {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 66%;
    }
    div:nth-child(1):hover ~ div:nth-child(2)::after {
        transform: translate(0, -50%) rotate(7deg);
    }
    div:nth-child(2)::after {
        top: -30px;
        left: calc(-66% - 20px);
        background-color: linear-gradient( to bottom, #0057A1, #1C3775 );;
        color:transparent;
        transition: transform .4s ease-out;
        transform: translate(0, -90%) rotate(0deg)
    }
    div:nth-child(2):hover::after {
        transform: translate(0, -50%) rotate(-7deg)
    }

    @keyframes bubbles {
        from {
            transform: translate();
        }
        to {
            transform: translate(0, -66.666%);
        }
}

`;

const AttackBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    font-family: "Source Code Pro";
    font-weight: 900;
    text-transform: uppercase;
    font-size: 30px;
    border-radius: 8px;
    border: none;
    /* color: #BBC8CA; */
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    border: 2px solid #939499;
    background-color: #939499;
    /* background: linear-gradient( to bottom, #BBC8CA, #939499 ); */
`;

const TopTeeth = styled.div`
    width: 100%;
    display: flex;
    height: 15px;
    border: 1px solid red;
`
const BottomTeeth = styled.div`
    width: 100%;
    height: 15px;
    border: 1px solid red;
`
const Teeth = styled.div`
    width: 0;
    height: 0;
    border-top: 5px solid black;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
`

const ManageBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    border-radius: 8px;
    color: #fff;
    font-family: "Source Code Pro";
    font-weight: 900;
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 30px; 
    background: #6F903A;
    cursor: pointer;
    /* background: linear-gradient( to bottom, #B6D2BB, #6F903A ); */
`;

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


function Main() {
    // Redux store에 있던 state가 남음
    let openSignIn = useSelector(state => state.openSignIn.open);
    let openSignUp = useSelector(state => state.openSignUp.open);
    console.log('openSignIn', openSignIn);
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    let dispatch = useDispatch();

    /**
     * onClick={() => { dispatch(openSignInModal) }}
     */

    return(
        <Container>
            <HeaderCover>
                <Header/>
            </HeaderCover>
            {openSignIn ?
            <ModalBackground>
                <Login></Login>
            </ModalBackground>
            :
            ""}
            {openSignUp ?
            <ModalBackground>
                <SignUp></SignUp>
            </ModalBackground>
            :
            ""}
            <MainBackground>
                <ActionBtnContainer>
                    <Link to='gathering' style={{ textDecoration: 'none' }}>
                        <GatheringBtn>
                            <div></div>
                            Gathering
                            <div></div>
                        </GatheringBtn>
                    </Link>
                    <AttackBtn>
                        {/* <TopTeeth>
                            {arr.map((el, idx) => <Teeth key={idx}></Teeth>)}
                        </TopTeeth> */}
                        Attack
                        {/* <BottomTeeth></BottomTeeth> */}
                    </AttackBtn>
                    <ManageBtn>Manage</ManageBtn>
                </ActionBtnContainer>
            </MainBackground>
            
        </Container>
    )
}

export default Main