import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 470px;
    box-shadow: 0 0 5px #e5e5e5;
    border-radius: 5px;
    background: linear-gradient( to bottom, #0057A1, #1C3775 );
`;

const Title = styled.div`
    width: 270px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;   
    color: #ffffff;
    margin-bottom: 10px;
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
    height: 350px;
    /* border-top: 1px dashed black;
    border-bottom: 1px dashed black; */
`

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

const SignUpBtn = styled.div`
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

const ErrMsg = styled.div`
    position: absolute;
    width: 220px;
    height: 25px;
    padding: 0px;
    background: #FFFFFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    :after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 8px 10px 0;
        border-color: #FFFFFF transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: -8px;
        left: 34px;
    }
`


function SignUp() {

    const [emailErr, setEmailErr] = useState(false);

    const checkEmail = (email) => {
        let regExp = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
        
        return regExp.test(email);
    };

    

    return (
        <LoginContainer>
            <InnerContainer>
                <Title>Sign Up</Title>
                <InputBtnContainer>
                    <InputContainer>
                        <InputTitle>e-mail</InputTitle>
                        <Email onChange={checkEmail}></Email>
                        <MailIcon>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </MailIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>name</InputTitle>
                        <Email></Email>
                        <MailIcon>
                            <FontAwesomeIcon icon={faUser} color="#ffffff"/>
                        </MailIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>password</InputTitle>
                        <Password type='password'></Password>
                        <LockIcon>
                            <FontAwesomeIcon icon={faLock} color="#ffffff"/>
                        </LockIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>password_check</InputTitle>
                        <Password type='password'></Password>
                        <LockIcon>
                            <FontAwesomeIcon icon={faLock} color="#ffffff"/>
                        </LockIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>question</InputTitle>
                        <Password></Password>
                        <LockIcon>
                            <FontAwesomeIcon icon={faQuestion} color="#ffffff"/>
                        </LockIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>anwser</InputTitle>
                        <Password></Password>
                        <LockIcon>
                            <FontAwesomeIcon icon={faKey} color="#ffffff"/>
                        </LockIcon>
                    </InputContainer>
                    <SignUpBtn>
                        Sign Up
                    </SignUpBtn>
                    
                </InputBtnContainer>
         
                
            </InnerContainer>
        </LoginContainer>
    )
}

export default SignUp