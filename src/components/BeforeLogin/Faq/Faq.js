import React from 'react';
import styled from 'styled-components';
import { FaqAccordion } from './FaqAccordion';

const HFaq = styled.h1`
font: Poppins;
text-align: center;
padding: 2rem 0;
color: var(--primaryWhite);
`
const FaqPage = styled.div`
background-color: var(--claret);
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 100px;
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