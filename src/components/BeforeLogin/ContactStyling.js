import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
display: flex;
flex-direction: column;
text-align: center;
min-height: 100vh;
`;

export const StyledTop = styled.div`
display: flex;
flex-direction: column;
background-color: var(--primaryWhite);
justify-content: space-between;
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 668px) {
  font-size: 3rem;
}

@media (min-width: 1024px) {
  flex-direction: row;
  gap: 6rem;
  align-items: center;
}
`;

export const ContactDetailsBox = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 1024px) {
  flex-direction: column;
  align-items: center;
}
`;

export const TopTitle = styled.h1`
margin: 3rem 0;
font-size: 2rem;

@media (min-width: 668px) {
  font-size: 3rem;
  margin-top: 4rem;
}

@media (min-width: 1024px) {
  font-size: 2.5rem;
  margin-top: 8rem;
}
`;

export const TopInfo = styled.h2`
color: var(--primaryBlack);
font-size: 1rem;
margin-top: 1rem;
margin-bottom: .5rem;
padding:3px;

@media (min-width: 668px) {
  font-size: 1rem;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 1.3rem;
}
`;

export const TopEmail = styled.h3`
color: var(--primaryBlack);
margin-top: 0;
font-size: 1.5rem;
padding:5px;

@media (min-width: 668px) {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 2rem;
}
`;

export const IconsContainer = styled.div`
display: flex;
gap: 1.5rem;
justify-content: center;
margin-top: 4rem;
margin-bottom: 0;

@media (min-width: 668px) {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 1.5rem;
  margin-top: 0rem;
}
`;

export const StyledImage = styled.img`
width: 100%;
height: 8rem;
margin-bottom: 0;
margin-top: 2rem;
align-self: flex-end;
bottom: 0;

@media (min-width: 668px) {
  height: 12rem;
}

@media (min-width: 1024px) {
  display: none;
}
`;

export const StyledImageDesktop = styled.img`
width: 50%;
margin: 2rem 0 7rem 0;


@media (max-width: 1023px) {
  display: none;
}
`;

export const StyledImageProfile = styled.img`
clip-path: circle();
max-height: 180px;
max-width: 180px;

@media (max-width: 1023px) {
  display: none;
}
`;

export const FlexContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 8rem 2rem;
background-color: var(--softPurple);

@media (min-width: 668px) {
flex-direction: row;
justify-content: space-between;

}

`;

export const FlexSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;


@media (min-width: 1024px) {
flex-direction: row;
}
`;

export const AuthorTitleBox = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
justify-items: flex-start;
`

export const StyledName = styled.h4`
position: relative;
font-size: 1rem;
color: var(--primaryWhite);
margin-bottom: 0;

@media (min-width: 668px) {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`;

export const StyledEmail = styled.p`
color: var(--primaryWhite);
font-size: 16px;

@media (min-width: 668px) {
  font-size: 15px;
}

@media (min-width: 1024px) {
  font-size: 10px;
}
`;

export const StyledLine = styled.span`
display: block;
align-self: left;
width: 30px;
height: 4px;
background-color: var(--lemon);
margin-top: 1rem;

@media (min-width: 664px) {
  top: -30px;
}
`;

export const WrapperSectionContact = styled.div`
display: flex;
flex-direction: column;


@media (min-width: 1024px) {
flex-direction: column;
align-items: center;

}
`;

export const StyledSpanContact = styled.span`
padding: 3px;
${(styling) => styling.contact && css`
background-color: var(--softPurple);`
}

${(styling) => styling.email && css`
background-color: var(--lemon);`
}
`;

