import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg" 
                leftBtnText="Custom Order" 
                rightBtnText="Existing Inventory" />

            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg" 
                leftBtnText="Custom Order" 
                rightBtnText="Existing Inventory" /> 

            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg" 
                leftBtnText="Shop Now" />    
            

                
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;