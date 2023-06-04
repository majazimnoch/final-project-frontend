import styled from 'styled-components';

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