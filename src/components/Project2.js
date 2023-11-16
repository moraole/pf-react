import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import lolpcScreenshot from '../images/lolpc-screenshot.png';

const Box = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  height: 75%;
  width: 50%;
  overflow: hidden;
  font-family: sans-serif;
  z-index: 20;
  
  @media (max-width: 1450px) {
    width: 70%;
    font-size: 10px;
  }
  @media (max-width: 900px) {
    left:0%;
    width: 100%;
    top: 23%;
    font-size: 10px;
  }

`;

const HiddenBox = styled.div`
  border-radius: 8px;
  position: relative;
  top: 100%;
  background: ${({ theme }) => theme.primaryColor};
  height: 100%;
  transition: top 0.3s ease-out;
  display: block;
  align-items: center; /* Center the content vertically */
  justify-content: center;
  padding: 20px;
  z-index: 800;

  ${props =>
        props.isVisible &&
        css`
      top: 0;
    `}
`;

const Heading = styled.h1`
  font-weight: 100;
  position: absolute;
  top: -4px;
  
  @media (max-width: 1541px) {

    font-size: 25px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex; /* Make the child elements flex */
  
  justify-content: space-between; /* Space the child elements evenly */
  align-items: center; /* Center the content vertically */
`;

const LeftContainer = styled.div`
  width: 40%; /* Adjust the width as needed */
  
`;

const RightContainer = styled.div`
  width: 60%; /* Adjust the width as needed */
  display: flex;
  position: relative;
  right: 8px;
  
  
`;

const Description = styled.p`
  margin: 0;
  width: 100%;
`;
const StyledH1 = styled.h1`
  font-weight: 2;
  font-size: 24px;

`;

const RightStyledH1 = styled(StyledH1)`
  position: absolute;
  font-weight: 2;
  font-size: 24px;
  top: -60px;
  bottom: 100px;
    
  @media(max-width: 1450px) {
    top: -40px;
    font-size: 20px;
  }
`;
const ZoomedImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Grayed out background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const ZoomedImg = styled.img`
  max-width: 100%;
  max-height: 95%;
  object-fit: contain;
  cursor: zoom-out;
`;

const Project2 = ({ isVisible, isDarkMode, isThemeButtonHovered }) => {
    const [hovering, setHovering] = useState(false);
    const [delayedVisibility, setDelayedVisibility] = useState(isVisible);
    const [isZoomed, setZoomed] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);
    const boxRef = useRef(null);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    const handleClickOutside = e => {
        if (
            boxRef.current &&
            !boxRef.current.contains(e.target) &&
            !isThemeButtonHovered &&
            !isZoomed &&
            !e.target.classList.contains('zoomed-image')
        ) {
            setDelayedVisibility(false);
        }
    };

    const handleZoomImage = e => {
        setZoomedImage(e);
        setZoomed(true);
    };

    const handleZoomOut = () => {
        setZoomed(false);
    };

    useEffect(() => {
        if (!isVisible) {
            const timeout = setTimeout(() => {
                setDelayedVisibility(true);
            }, 100);

            document.addEventListener('click', handleClickOutside);

            return () => {
                clearTimeout(timeout);
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [isVisible, isThemeButtonHovered]);

    return (
        <Box ref={boxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <HiddenBox theme={isDarkMode ? darkTheme : lightTheme} isVisible={delayedVisibility}>
                <Heading>Lolpc: League of Legends Player Comparison Tool</Heading>
                <SimpleBar style={{ width: '95%', maxHeight: '90%', top: '55px' }}>
                    <StyledH1>What is Lolpc?</StyledH1>
                    <Description>
                        Lolpc is a powerful tool designed for League of Legends players to assess their chances of winning based on their ranked match history. It provides a percentage probability that one player has of winning over another, offering valuable insights into potential advantages or disadvantages.
                    </Description>
                    <DescriptionContainer>
                        <LeftContainer>
                            <img
                                src={lolpcScreenshot}
                                alt="Lolpc Screenshot"
                                onClick={() => handleZoomImage(lolpcScreenshot)}
                                style={{
                                    maxWidth: '90%',
                                    position: 'relative',
                                    left: '5px',
                                    height: 'auto',
                                    display: 'flex',
                                    marginTop: '30px',
                                    cursor: 'pointer',
                                }}
                            />
                        </LeftContainer>
                        <RightContainer>
                            <RightStyledH1>How Does It Work?</RightStyledH1>
                            <Description>
                                Lolpc analyzes ranked match history data, considering various factors such as champion performance, win rates, and historical trends. By processing this information, it generates a win probability percentage, allowing players to make informed decisions and strategize for upcoming matches.
                            </Description>
                        </RightContainer>
                    </DescriptionContainer>

                    <StyledH1>Key Features:</StyledH1>
                    <Description>
                        - Match History Analysis: Lolpc evaluates your ranked match history to identify patterns and trends.
                        <br />
                        - Win Probability Calculation: Utilizing algorithms, Lolpc calculates the likelihood of winning in the next match.
                        <br />
                        - Player Advantage Insights: Gain insights into potential advantages or challenges based on historical performance.
                        <br />
                        - User-Friendly Interface: The tool provides an intuitive and easy-to-use interface for seamless interaction.
                    </Description>

                    <StyledH1>Why Lolpc?</StyledH1>
                    <Description>
                        In the competitive world of League of Legends, having a strategic edge can make all the difference. Lolpc empowers players by providing data-driven insights, allowing them to make strategic decisions and enhance their overall gaming experience. Whether you're a casual player or a seasoned veteran, Lolpc is your go-to tool for optimizing your chances of success on the Summoner's Rift.
                    </Description>
                    
                    <StyledH1>Working with Riot Games API</StyledH1>
                    <Description>
                        As part of the continuous improvement of Lolpc, I worked with Riot Games's developer portal to enhance the accuracy and efficiency of the win probability calculations. Recognizing the importance of data access, I visited Riot's Developer Portal and applied for increased API rate limits specifically for Lolpc.
                        <br />
                        Due to initial limitations, Lolpc generated predictions based on a restricted dataset. However, with the granted permission from Riot Games, I now have higher API limits, enabling me to gather more extensive match history data for a more precise analysis. This work reflects my commitment to providing users with the most accurate and valuable insights into their League of Legends gaming experience.
                    </Description>
                    <br />
                    
                </SimpleBar>
            </HiddenBox>
            {isZoomed && (
                <ZoomedImage onClick={handleZoomOut} className="zoomed-image">
                    <ZoomedImg
                        src={zoomedImage}
                        alt="Zoomed Lolpc Screenshot"
                        className="zoomed-image"
                    />
                </ZoomedImage>
            )}
        </Box>
    );
};

export default Project2;
