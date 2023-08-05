import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #777;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  padding: 1.5rem 3rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
    return (
        <HomeContainer>
            <Title>Welcome to My Portfolio</Title>
            <Subtitle>Discover my creative work and skills</Subtitle>
            <Button>View Projects</Button>
        </HomeContainer>
    );
};

export default Home;