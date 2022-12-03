import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
       
`

function Main() {
    return(
        <Link to='/login'>
            <Container>
                로그인
            </Container>
        </Link>
        
    )
}

export default Main