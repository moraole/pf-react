import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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
    left: 0%;
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

  ${(props) =>
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

const DatabaseSchema = styled.div`
  margin-top: -10px;
  font-family: monospace;
  white-space: pre-wrap;
`;

const Project4 = ({ isVisible, isDarkMode, isThemeButtonHovered }) => {
    const [hovering, setHovering] = useState(false);
    const [delayedVisibility, setDelayedVisibility] = useState(isVisible);
    const boxRef = useRef(null);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    useEffect(() => {
        if (!isVisible) {
            const timeout = setTimeout(() => {
                setDelayedVisibility(true);
            }, 100);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [isVisible, isThemeButtonHovered]);

    return (
        <Box ref={boxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <HiddenBox theme={isDarkMode ? darkTheme : lightTheme} isVisible={delayedVisibility}>
                <Heading>SMS Spam Identifier</Heading>
                <SimpleBar style={{ width: '95%', maxHeight: '90%', top: '55px' }}>
                    <StyledH1>Project Overview</StyledH1>
                    <Description>
                        This project involves creating a machine learning model using TensorFlow and Keras to classify SMS messages as either "ham" or "spam." The model is trained on a dataset of labeled SMS messages and is capable of predicting whether a given message is spam or not with high accuracy.
                    </Description>

                    <StyledH1>Model Architecture</StyledH1>
                    <Description>
                        The model architecture consists of an embedding layer followed by a global average pooling layer and two dense layers with relu and sigmoid activations, respectively. The model utilizes binary cross-entropy as the loss function and adam optimizer for training.
                    </Description>

                    <StyledH1>Data Preprocessing</StyledH1>
                    <Description>
                        The SMS messages are preprocessed using the Tokenizer from Keras to convert text data into sequences of integers. The sequences are then padded to ensure uniform length for input to the model.
                    </Description>

                    <StyledH1>Model Training</StyledH1>
                    <Description>
                        The model is trained on the preprocessed data with a batch size of 32 and for 50 epochs. The training process includes evaluating the model's performance on the validation set to monitor its accuracy and loss.
                    </Description>

                    <StyledH1>Model Evaluation</StyledH1>
                    <Description>
                        After training, the model is evaluated on the test set to assess its performance in classifying SMS messages as "ham" or "spam." The evaluation metrics include accuracy, precision, recall, and F1-score.
                    </Description>

                    <StyledH1>Message Prediction</StyledH1>
                    <Description>
                        A function is implemented to predict the label (ham/spam) and confidence score for a given input message using the trained model. The function utilizes the Tokenizer to preprocess the message and the model to make predictions.
                    </Description>
                    <h4>This was part of the freecodecamp.org challenge, for my implementation feel free to take a look here: <a href='https://colab.research.google.com/drive/1KVBB6ixFc4rd4DzBrrM6biAkggg7sW4I?usp=sharing'><br></br><br></br>https://colab.research.google.com/drive/1KVBB6ixFc4rd4DzBrrM6biAkggg7sW4I?usp=sharing</a></h4>
                </SimpleBar>
            </HiddenBox>
        </Box>
    );
};

export default Project4;
