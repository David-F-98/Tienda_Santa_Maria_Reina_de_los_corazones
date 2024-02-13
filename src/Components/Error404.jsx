import React from 'react';
import styled from 'styled-components';
const Error404 = () => {
    return ( 
    <Container id="container">
        <Content className="content">
            <Err>404</Err>
            <Opps>Oops! page not found</Opps>
            <ErrText>The page you were looking for doesn't exist. You may have mistyped the address or the page may have
                moved.</ErrText>
            {/* <a href="../App">Inicio</a> */}
        </Content>
    </Container>
     );
}
 
export default Error404;

const Container = styled.div`
     position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("pattern.png"), #151729;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .5);
    transition: 200ms linear;
`;

const Content = styled.div`
    max-width: 600px;
    text-align: center;
`;

const Err = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 18vw;
    color: #fff;
    line-height: 1em;
`;

const Opps = styled.h4`
    position: relative;
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #111;
    background: #fff;
    font-weight: 300;
    padding: 10px 20px;
    display: inline-block;
`;

const ErrText = styled.p`
    color: #fff;
    font-size: 1.2em;
`;
