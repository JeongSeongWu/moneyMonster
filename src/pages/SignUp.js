import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
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
    height: 400px;
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
`;


function SignUp() {
    return (
        <LoginContainer>
            <InnerContainer>
                <Title>Sign Up</Title>
                <InputBtnContainer>
                    <InputContainer>
                        <InputTitle>e-mail</InputTitle>
                        <Email></Email>
                        <MailIcon>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </MailIcon>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>name</InputTitle>
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
         
                
            </InnerContainer>
        </LoginContainer>
    )
}

export default SignUp