import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  library.add(faLinkedinIn);

  return (
    <StyledFooter>
      <StyledPAuthors>Authors:</StyledPAuthors>
      <AuthorsBox>
        <SingleAuthor>
          <p>Sandra Olsson</p>
          <IconsSoMeDiv>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="faicon-styling-white" />
            </a>
            <a href="https://github.com/SandraMadeleine" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="faicon-styling-white" />
            </a>
          </IconsSoMeDiv>
        </SingleAuthor>
        <SingleAuthor>
          <p>Ylva Karlsson</p>
          <IconsSoMeDiv>
            <a href="https://www.linkedin.com/in/ylvakarlsson87/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="faicon-styling-white" />
            </a>
            <a href="https://github.com/YlvaKarlsson" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="faicon-styling-white" />
            </a>
          </IconsSoMeDiv>
        </SingleAuthor>
        <SingleAuthor>
          <p>Maja Zimnoch</p>
          <IconsSoMeDiv>
            <a href="https://www.linkedin.com/in/majazimnoch/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="faicon-styling-white" />
            </a>
            <a href="https://github.com/majazimnoch" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="faicon-styling-white" />
            </a>
          </IconsSoMeDiv>
        </SingleAuthor>
      </AuthorsBox>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--claret);
background: var(--claret);
color: var(--primaryWhite);
padding-top: 2rem;
`
const StyledPAuthors = styled.p`
border-bottom: 2px solid var(--primaryWhite);
padding-bottom: 3px;
text-transform: uppercase;
`

const AuthorsBox = styled.div`
display: flex;
flex-direction: row;
gap: 3rem;

@media (max-width: 1023px) {
flex-direction: column;
gap: .3rem;
}

`
const SingleAuthor = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2rem;

@media (max-width: 1023px) {
  margin-bottom: .2rem;
}

`
const IconsSoMeDiv = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
margin:0 2rem 2rem 2rem;

.faicon-styling-white {
    color: var(--primaryWhite);
  }

.faicon-styling-white:hover {
  transform: scale(1.5);
  overflow: hidden;
  transition: transform .5s ease;
} 
`