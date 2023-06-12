import React from 'react';
import { FaqAccordion } from './FaqAccordion';
import { FaqPage, HFaq } from './FaqStyling';
// import Horseshoe from '../../../assets/horseshoe.svg'

const Faq = () => {
  return (
    <FaqPage id="faq">
      <HFaq>Questions & Answers</HFaq>
      <FaqAccordion />
    </FaqPage>
  );
};

export default Faq;