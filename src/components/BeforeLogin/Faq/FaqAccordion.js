import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { accordionData } from './accordionData';
import { Accordion, AccordionContent, AccordionTitle, AccordionWrapper, Hr, ImgSparkle, SingleSectionAccordion } from './Faq.style';
import Sparkle from '../../../assets/sparkle.png'

const SectionSeparator = () => {
  return <Hr style={{ margin: ' 0' }} />;
};

// chatGPT suggested to rename this to Accordion instead for consistency but I didn't do that yet
const FaqAccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setIsRotated(!isRotated);
  };

  return (
    <AccordionWrapper>
      <Accordion>
        <AccordionTitle onClick={toggleAccordion}>
          <SingleSectionAccordion>{title}</SingleSectionAccordion>
          <ImgSparkle src={Sparkle} alt="sparkle" className={isRotated ? 'rotate' : ''} />
        </AccordionTitle>
        {isActive && <AccordionContent isActive={isActive}>{content}</AccordionContent>}
      </Accordion>
      <SectionSeparator />
    </AccordionWrapper>
  );
};

export const FaqAccordion = () => {
  return (
    <div>
      {accordionData.map(({ title, content }) => (
        <FaqAccordionItem key={uuidv4()} title={title} content={content} />
      ))}
    </div>
  );
};

