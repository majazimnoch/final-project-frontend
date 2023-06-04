import React from 'react';
import styled from 'styled-components';
import { FaqAccordion } from './FaqAccordion';
import Horseshoe from '../../../assets/horseshoe.svg'

const HFaq = styled.h1`
font: Poppins;
text-align: center;
padding-bottom: 2rem;
color: var(--primaryWhite);

@media (min-width: 668px) and (max-width:1023px) {
        
} 

@media (max-width:667px) {
    padding: .5rem 0;    
} 
`
const FaqPage = styled.div`
background-color: var(--claret);
background-image: url(${Horseshoe});
background-repeat:no-repeat;
background-position: right 100px top 10px;
background-size: 20%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0rem 8rem 2rem 8rem;

@media (min-width: 668px) and (max-width:1023px) {
    padding: 0rem 4rem 2rem 4rem;
    min-height: 50vh;
    background-size: 100%;
    background-position: right 50px top 200px;
} 

@media (max-width:667px) {
    padding: 2rem 1rem;
    min-height: 50vh;
} 
`

const Faq = () => {
  return (
    <FaqPage>
      <HFaq>Questions & Answers</HFaq>
      <FaqAccordion />
    </FaqPage>
  );
};

export default Faq;