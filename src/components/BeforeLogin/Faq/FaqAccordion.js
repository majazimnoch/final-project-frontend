import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { accordionData } from './accordionData';
import { Accordion, AccordionContent, AccordionTitle, Hr, ImgSparkle, SingleSectionAccordion } from './FaqStyling';
import Sparkle from '../../../assets/sparkle.png'

const SectionSeparator = () => {
  return <Hr style={{ margin: ' 0' }} />;
};

const FaqAccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Accordion>
        <AccordionTitle onClick={toggleAccordion}>
          <SingleSectionAccordion>{title}</SingleSectionAccordion>
          <ImgSparkle src={Sparkle} alt="sparkle" className={isActive ? 'rotate' : ''} />
        </AccordionTitle>
        {isActive && <AccordionContent isActive={isActive}>{content}</AccordionContent>}
      </Accordion>
      <SectionSeparator />
    </>
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

