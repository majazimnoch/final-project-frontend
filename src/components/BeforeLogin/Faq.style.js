// not sure about the naming for this file - this is the styling for the FAQ.
// outcommented code at the bottom - need to be refactored or moved /YK
import styled from 'styled-components';

export const Header = styled.h1`
    text-align: center;
    margin: 2rem 0 4rem 0;
    //the border will be deleted later - just for showing the size of the content
    border: solid red 1rem;
`

export const Accordion = styled.div`
    max-width: 600px;
    margin: 2rem auto;
`
// this below might change to something else instead of div
export const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    background-color: #B85780;
    padding: 1rem;
    font-weight: bold;

    & :hover {
        background-color: #B85780;
        filter: brightness(150%);
        //might delete the border-radius after when we style together.
        border-radius: 10rem;
    }
`

export const AccordionContent = styled.div`
    background-color: #39b9d2;
    padding: 1rem;
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