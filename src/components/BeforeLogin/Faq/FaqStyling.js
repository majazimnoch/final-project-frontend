import styled from 'styled-components';

export const FaqPage = styled.div`
background-color: var(--claret);
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 4rem 2rem;

@media (min-width: 668px) and (max-width:1023px) {
    padding: 7rem 4rem;
} 

@media (min-width:1024px) {
    padding: 4rem 8rem 8rem 8rem;
    min-height: 100vh;
} 
`
export const HFaq = styled.h1`
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

export const Accordion = styled.div`
// header of a single q&a
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 1rem 0;

    @media (min-width:1024px) {
    padding: 0 10px;
    } 
`
export const AccordionTitle = styled.div`
// row header plus img 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;

    @media (min-width: 668px) and (max-width:1024px) {
        padding: 15px;
        } 
    @media (min-width:1024px) {
        padding: 20px;
        } 
`
export const SingleSectionAccordion = styled.div`
// header of a single q&a
    color: var(--primaryWhite);
    font-family: var(--fontParagraph);
    font-size: 20px;
    font-style: italic;
    } 
`
export const ImgSparkle = styled.img`
// img of the thing opening the accordion 
    height: 35px;
    cursor: pointer;
    transition: transform 0.8s ease;
    &.rotate {
    transform: scale(1.2) rotate(45deg);
    }
`
export const AccordionContent = styled.div`
// content, text showing up after opening accordion 
    color: var(--snowWhite);
    padding: ${({ isActive }) => (isActive ? '1rem' : '0')};
 
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
`;

export const Hr = styled.hr`
// line after each section 
    border: .4px solid var(--snowWhite);
`