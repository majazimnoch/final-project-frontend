import React from 'react';
import { FaqAccordion, FaqPage, HFaq,  } from './FaqAccordion';
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