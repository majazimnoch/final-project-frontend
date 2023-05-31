import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { accordionData } from './accordionData';
import { Accordion, AccordionContent, AccordionTitle } from './Faq.style';

// chatGPT suggested to rename this to Accordion instead for consistency but I didn't do that yet
const FaqAccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Accordion>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <hr />
        <div>{isActive ? '-' : '*'}</div>
      </AccordionTitle>
      {isActive && <AccordionContent>{content}</AccordionContent>}
    </Accordion>
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

