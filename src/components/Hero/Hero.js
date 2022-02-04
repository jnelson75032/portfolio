import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Full stack developer familiar with using Ansible, Docker, Django, JavaScript, HTML5, Python, React, Ruby on Rails
      </SectionText>
      <Button onClick={() => window.location = 'mailto:jrnelson654@gmail.com'}>Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;