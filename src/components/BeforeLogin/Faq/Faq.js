import React from 'react';
import styled from 'styled-components';
import { FaqAccordion } from './FaqAccordion';
// import Horseshoe from '../../../assets/horseshoe.svg'

const FaqPage = styled.div`
background-color: var(--claret);
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 4rem 2rem;
min-height: 100vh;

@media (min-width: 668px) and (max-width:1023px) {
    padding: 7rem 4rem;
} 

@media (min-width:1024px) {
    padding: 4rem 8rem 8rem 8rem;
} 
`
const HFaq = styled.h1`
font: Poppins;
text-align: center;
padding-bottom: 2rem;
color: var(--primaryWhite);

@media (min-width: 668px) {
  font-size: 5rem;
  margin-top: 4rem;
}

@media (min-width: 1024px) {
  font-size: 2.5rem;
  margin-top: 5rem;
}
`
const Faq = () => {
  return (
    <FaqPage id="faq">
      <HFaq>Questions & Answers</HFaq>
      <FaqAccordion />
    </FaqPage>
  );
};

export default Faq;