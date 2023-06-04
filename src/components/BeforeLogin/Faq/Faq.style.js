import styled from 'styled-components';

export const Accordion = styled.div`
    border: 1px red solid;
// header of a single q&a
    display: flex;
    flex-direction: column;
    padding: 0 5px;

    @media (min-width:1024px) {
    padding: 0 10px;
    } 
`
export const SingleSectionAccordion = styled.div`
    border: 1px blue solid;
// header of a single q&a
    color: var(--primaryWhite);
    font-family: var(--fontParagraph);
    font-size: 20px;
    font-style: italic;
    } 
`
export const AccordionTitle = styled.div`
border: 1px orange solid;
// row header plus img 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
    color: #F9F6FF;

    @media (min-width: 668px) and (max-width:1024px) {
        padding: 15px;
        } 
    @media (min-width:1024px) {
        padding: 20px;
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
    max-height: ${({ isActive }) => (isActive ? '1000px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
`;

export const Hr = styled.hr`
// line after each section 
    border: .4px solid var(--snowWhite);
`