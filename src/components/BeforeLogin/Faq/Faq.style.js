// not sure about the naming for this file - this is the styling for the FAQ.
// outcommented code at the bottom - need to be refactored or moved /YK
import styled from 'styled-components';

// outcommented the Wrapper for now - not sure I'll need it or how I can use it for the styling
// export const AccordionWrapper = styled.div`
// need to adjust the width somehow but I think the AccordionWrapper is needed
// to get the horseshoes showing up
// display: flex;
// justify-content: center;
// align-items: center;
// max-width: 80%;
// background-color: #B85780;
// `

export const AccordionWrapper = styled.div`
    background-color: var(--claret);
    display: flex,
    flex-direction: row;
    padding: 0 10px;

    @media (min-width:1024px) {
        
    } 
`
export const SingleSectionAccordion = styled.div`
        
    } 
`
export const ImgSparkle = styled.img`
height: 35px;
transition: transform 0.8s ease;
&.rotate {
  transform: rotate(90deg);
}
`

export const Accordion = styled.div`

    @media (min-width:1024px) {
        
    } 
`

// this below might change to something else instead of div
export const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem;
    font-weight: bold;
    color: #F9F6FF;
`

export const AccordionContent = styled.div`
    color: var(--snowWhite);
  padding: ${({ isActive }) => (isActive ? '1rem' : '0')};
  max-height: ${({ isActive }) => (isActive ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

export const Hr = styled.hr`
border: .4px solid var(--snowWhite);
`

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//     font-size: 20px;
//     background: rgb(238, 174, 202);
//     background: radial-gradient(
//       circle,
//       rgba(238, 174, 202, 1) 0%,
//       rgba(199, 233, 148, 1) 100%
//     );
//   }
// NOT SURE WHERE WE WANT TO PUT OUR MEDIA QUERIES - I found some links on Stack
// so I think it might be a good idea to add a globalstyles to the whole project.
//   @media screen and (max-width: 700px) {
//     body {
//       font-size: 18px;
//     }

//     .accordion {
//       width: 90%;
//     }
//   }