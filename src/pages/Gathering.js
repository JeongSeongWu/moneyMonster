import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { faFishFins } from "@fortawesome/free-solid-svg-icons";
import TestFish from "../fish/TestFish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const HeaderCover = styled.div`
    width: 100%;
`

const GatheringBackground = styled.div`
    width: 99.9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 920px;   
`

const InnerContainer = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
`
const StartBtn = styled.div`
    width: 140px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    background-color: #0057A1;
    border-radius: 10px;
    path {
        
    }
`

const FishCover = styled.div`
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
`

function Gathering() {
    return (
        <Container>
            <HeaderCover>
                <Header/>
            </HeaderCover>
            <GatheringBackground>
                
                <InnerContainer>
                <StartBtn>
                    <FontAwesomeIcon icon={faFishFins} color='#fff'></FontAwesomeIcon>
                </StartBtn>
                    <FishCover>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                        <TestFish></TestFish>
                    </FishCover>
                </InnerContainer>
            </GatheringBackground>
        </Container>
    )
}

export default Gathering