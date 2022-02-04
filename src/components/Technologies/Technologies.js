import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies as a web developer. From front-and-back-end to DevOps.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, node, and SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOPS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ansible, Docker, Jenkins
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
