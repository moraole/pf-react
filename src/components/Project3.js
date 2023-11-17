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

const DatabaseSchema = styled.div`
  margin-top: -10px;
  font-family: monospace;
  white-space: pre-wrap;
`;
const Project3 = ({ isVisible, isDarkMode, isThemeButtonHovered }) => {
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

      // Additional cleanup or event listeners if needed

      return () => {
        clearTimeout(timeout);
        // Additional cleanup or removal of event listeners if needed
      };
    }
  }, [isVisible, isThemeButtonHovered]);

  return (
    <Box ref={boxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <HiddenBox theme={isDarkMode ? darkTheme : lightTheme} isVisible={delayedVisibility}>
        <Heading>PostgreSQL and Bash Scripting Project</Heading>
        <SimpleBar style={{ width: '95%', maxHeight: '90%', top: '55px' }}>
          <StyledH1>Project Overview</StyledH1>
          <Description>
            This project showcases my expertise in utilizing PostgreSQL and Bash scripting to manage and analyze data effectively. Leveraging these powerful tools, I implemented a solution that demonstrates my proficiency in database design, SQL queries, and automation through Bash scripting.
          </Description>

          
              <StyledH1>Database Design</StyledH1>
              <Description>
                I designed a PostgreSQL database named 'worldcup,' demonstrating my skills in creating structured and efficient data storage solutions. The database includes tables such as 'games' and 'teams,' each serving a specific purpose in organizing and managing World Cup-related information as part of the freecodecamp.org curriculum for Relational Database courses.
              </Description>
            
            
              <StyledH1>Bash Scripting Automation</StyledH1>
              <Description>
                To enhance the efficiency of data management, I employed Bash scripting for automation tasks. This includes tasks such as database setup, data insertion, and potentially data extraction. The scripts I developed streamline processes, showcasing my ability to leverage scripting for increased productivity.
              </Description>
            
          

          <StyledH1>Database Schema</StyledH1>
          <DatabaseSchema>
            {`
Table: games
+-----------+---------+--------+----------+-------------+--------------+----------------+
| game_id   | year    | round  | winner_id| opponent_id | winner_goals | opponent_goals |
+-----------+---------+--------+----------+-------------+--------------+----------------+
| integer   | integer | string | integer  | integer     | integer      | integer        |
+-----------+---------+--------+----------+-------------+--------------+----------------+
| Primary Key: game_id                                       | 
| Foreign Key: winner_id REFERENCES teams(team_id)           |
| Foreign Key: opponent_id REFERENCES teams(team_id)         |
  
Table: teams
+----------+---------+
| team_id  | name    |
+----------+---------+
| integer  | string  |
+----------+---------+
| Primary Key: team_id
`}
          </DatabaseSchema>
          <StyledH1>Primary and Foreign Key Relationships</StyledH1>
          <Description>
            The primary and foreign key relationships ensure data consistency and integrity within the 'games' and 'teams' tables. The 'game_id' serves as the primary key in the 'games' table, linking to the 'winner_id' and 'opponent_id' in the same table as foreign keys. Similarly, the 'team_id' in the 'teams' table acts as the primary key and is referenced as a foreign key in the 'games' table.
          </Description>

          <StyledH1>Constraints</StyledH1>
          <DatabaseSchema>
            {`
Name: games_pkey
Type: PRIMARY KEY
Columns: game_id

Name: teams_name_key
Type: UNIQUE CONSTRAINT
Columns: name

Name: teams_pkey
Type: PRIMARY KEY
Columns: team_id

Name: games_opponent_id_fkey
Type: FOREIGN KEY
Columns: opponent_id
References: teams(team_id)

Name: games_winner_id_fkey
Type: FOREIGN KEY
Columns: winner_id
References: teams(team_id)
`}
          </DatabaseSchema>
          <StyledH1>Primary and Foreign Key Relationships</StyledH1>
          <Description>
            The primary and foreign key relationships ensure data consistency and integrity within the 'games' and 'teams' tables. The 'game_id' serves as the primary key in the 'games' table, linking to the 'winner_id' and 'opponent_id' in the same table as foreign keys. Similarly, the 'team_id' in the 'teams' table acts as the primary key and is referenced as a foreign key in the 'games' table.
          </Description>
          <br /><br />
        </SimpleBar>
      </HiddenBox>
    </Box>
  );
};

export default Project3;
