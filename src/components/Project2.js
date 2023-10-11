import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: blue;
    transform: translateY(100%); // Start off-screen
    transition: transform 1s ease, background-color .3s ease; // Different durations
    z-index: 10;

    &.slide-in {
        transform: translateY(0); // Slide in from the bottom
    }
`;

const Project2 = ({ isVisible, theme }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            // Use the ref to add the 'slide-in-active' class
            containerRef.current.classList.add('slide-in-active');
        }
    }, [isVisible]);

    return (
        <ProjectContainer ref={containerRef} className={`slide-in ${isVisible ? 'slide-in-active' : ''}`}>
            test test test test test test test lorem ipsum ipsum
        </ProjectContainer>
    );
};

export default Project2;
