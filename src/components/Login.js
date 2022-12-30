import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeSignInModal } from "../app/store.js"
import { useDispatch } from "react-redux";

const LoginContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    z-index: 9;
    width: 300px;
    height: 330px;
    box-shadow: 0 0 5px #e5e5e5;
    border-radius: 5px;
    background: linear-gradient( to bottom, #0057A1, #1C3775 );
`

const CloseBtn = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

const Title = styled.div`
    width: 270px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;   
    color: #ffffff;
`

const InputBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 300px;
    height: 250px;
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 3px;
    width: 100%;
    height: 40px;    
`;

const InputTitle = styled.div`
    color: #ffffff;
    font-size: 12px;
`

const MailIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 7px;
`

const LockIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 10px;
`

const Email = styled.input`
    width: 240px;
    height: 25px;
    border: none;
    padding-left: 30px;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 1px 1px 1px #e5e5e5;
    background-color: #9BB7D4;
`;

const Password = styled.input`
    width: 240px;
    height: 25px;
    padding-left: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 2px;
    box-shadow: 1px 1px 1px #e5e5e5;
    background-color: #9BB7D4;
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    gap: 3px;
    flex-direction: column;
`

const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0057A1;
    width: 240px;
    height: 30px;
    border-radius: 15px;
    margin-top: 20px;
    /* background-color: #BBC7CE; */
    background-color: #ffffff;
    cursor: pointer;
    :hover {
        background-color: #03257E;
        color: #ffffff;
        border: 1px solid #0057A1;
        box-sizing: border-box;
    }
`;

const SignUp = styled.div`
    cursor: pointer;
    color: #ffffff;
    font-size: 14px;
`;

function Login() {

    let dispatch = useDispatch()
    
    
    return (
        <LoginContainer>
            <CloseBtn onClick={() => dispatch(closeSignInModal())}>
                <FontAwesomeIcon icon={faXmark} color="#ffffff"/>
            </CloseBtn>
            <InnerContainer>
                <Title>PAPER AQUARIUM</Title>
                <InputBtnContainer>
                    <InputContainer>
                        <InputTitle>e-mail</InputTitle>
                        <Email></Email>
                        <MailIcon>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </MailIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>password</InputTitle>
                        <Password></Password>
                        <LockIcon>
                            <FontAwesomeIcon icon={faLock} color="#ffffff"/>
                        </LockIcon>
                    </InputContainer>
                    <LoginBtn>
                        Login
                    </LoginBtn>
                    
                </InputBtnContainer>
                <BottomContainer>
                    {/* <Link to='/signup'>
                        <SignUp>Sign Up</SignUp>
                    </Link> */}
                </BottomContainer>
                
            </InnerContainer>
        </LoginContainer>
    )
}

export default Login