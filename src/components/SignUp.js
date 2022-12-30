import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faXmark, faAngleDown, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { closeSignUpModal } from "../app/store";
import { useDispatch } from "react-redux";

const LoginContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 550px;
    z-index: 9;
    box-shadow: 0 0 5px #e5e5e5;
    border-radius: 5px;
    background: linear-gradient( to bottom, #0057A1, #1C3775 );
`;

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
    height: 480px;    
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

const AngleDown = styled.div`
    position: absolute;
    top: 20px;
    right: 5px;
    cursor: pointer;
`

const InputBox = styled.input`
    width: 240px;
    height: 25px;
    border: none;
    padding-left: 30px;
    box-sizing: border-box;
    border-radius: 2px;
    /* box-shadow: 1px 1px 1px #e5e5e5; */
    background-color: #9BB7D4;
`;

const Select = styled.div`
    position: relative;
    width: 240px;
    height: 25px;
    border: none;
    padding-left: 30px;
    box-sizing: border-box;
    border-radius: 2px;
    /* box-shadow: 1px 1px 1px #e5e5e5; */
    background-color: #9BB7D4;
`;

const slideDown = keyframes`
    0% {
        transform: translateY(-30%);
    }

    100% {
        transform: translateY(0);
    }
`


const OptionContainer = styled.div`
    /* 얘는 클릭을 하면 디스플레를 켜고  */
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 25px;
    left: 0;
    width: 240px;
    height: 75px;
    opacity: 0;
    visibility: hidden;
    // animation: ${slideDown} 1s;
    
    /* box-sizing: border-box;
    border: 1px solid #9BB7D4; */
`;

const Option = styled.div`
    width: 100%;
    height: 30px;
    padding-left: 10px;
    background-color: #9BB7D4;
    box-sizing: border-box;
    border: 1px solid #9BB7D4;
    color: #ffffff;
    font-size: 12px;
    z-index: 1;
    :nth-child(2)::after {
        border: 1px solid #e5e5e5;
    }

    :nth-child(3) {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }
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
    height: 40px;
    border-radius: 20px;
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
    width: 240px;
    height: 8px;
    border: none;
    color: #C63A29;
    font-size: 8px;
`




function SignUp() {

    let dispatch = useDispatch();

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const questionList = ["당신의 보물 1호는?", "가장 좋아하는 책은 무엇인가요?", "사랑은 무엇입니까?"]

    const selectDom = useRef();
    const optionContainer = useRef();
    
    const checkMail = (e) => {
        const regExp = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
        const value = e.target.value;
        let check = regExp.test(value);
        if (!check) setEmailErr("알맞은 이메일 형식이 아닙니다.")
        if (check) setEmailErr("")
        if (value === '') setEmailErr("")
    };

    const checkPassword = (e) => {  
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;   
        const value = e.target.value;
        let check = regExp.test(value);
        if (!check) setPasswordErr("비밀번호는 8자 이상 문자가 포함되어야 합니다.")
        if (check) setPasswordErr("")
        if (value === '') setPasswordErr("")
    }

    const openDropDown = () => {
        console.log('DOM집었냐?', selectDom);
        selectDom.current.style.borderBottomLeftRadius = 0;
        selectDom.current.style.borderBottomRightRadius = 0;
        if(selectDom.current.style.borderBottomLeftRadius === 0) selectDom.current.style.borderBottomLeftRadius = "2px"
        if(selectDom.current.style.borderBottomRightRadius === 0) selectDom.current.style.borderBottomRightRadius = "2px"
        setIsOpen(!isOpen);
        console.log('isOpen?', isOpen)
    }

    return (
        <LoginContainer>
            <CloseBtn onClick={() => dispatch(closeSignUpModal())}>
                <FontAwesomeIcon icon={faXmark} color="#ffffff"/>
            </CloseBtn>
            <InnerContainer>
                <Title>SignUp</Title>
                <InputBtnContainer>
                    <InputContainer>
                        <InputTitle>e-mail</InputTitle>
                        <InputBox onChange={checkMail}></InputBox>
                        <MailIcon>
                            <FontAwesomeIcon icon={faEnvelope} color="#ffffff"/>
                        </MailIcon>
                        <ErrMsg>{emailErr}</ErrMsg>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>이름</InputTitle>
                        <InputBox></InputBox>
                        <MailIcon>
                            <FontAwesomeIcon icon={faUser} color="#ffffff"/>
                        </MailIcon>
                        <ErrMsg>{}</ErrMsg>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>비밀번호</InputTitle>
                        <InputBox type='password' onChange={checkPassword}></InputBox>
                        <LockIcon>
                            <FontAwesomeIcon icon={faLock} color="#ffffff"/>
                        </LockIcon>
                        <ErrMsg>{passwordErr}</ErrMsg>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>비밀번호 확인</InputTitle>
                        <InputBox type='password'></InputBox>
                        <LockIcon>
                            <FontAwesomeIcon icon={faLock} color="#ffffff"/>
                        </LockIcon>
                        <ErrMsg>{}</ErrMsg>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>비밀번호 찾기 질문</InputTitle>
                        <Select ref={selectDom}>
                            <OptionContainer ref={optionContainer} isOpen={isOpen}>
                            {questionList.map((el, idx) => {
                                return (
                                    <Option key={idx}>{el}</Option>
                                )
                            })}
                            </OptionContainer>
                        </Select>
                        <LockIcon>
                            <FontAwesomeIcon icon={faQuestion} color="#ffffff"/>
                        </LockIcon>
                        <AngleDown onClick={openDropDown}>
                            <FontAwesomeIcon icon={faAngleDown} color="#ffffff"/>
                        </AngleDown>
                        <ErrMsg>{}</ErrMsg>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>답변</InputTitle>
                        <InputBox></InputBox>
                        <LockIcon>
                            <FontAwesomeIcon icon={faKey} color="#ffffff"/>
                        </LockIcon>
                        <ErrMsg>{}</ErrMsg>
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