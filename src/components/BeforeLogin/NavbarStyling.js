import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 0;
    background-color: var(--claret);
    color: var(--primaryWhite);

    @media only screen and (max-width:1024px) {
    }   
`

export const StyledAnchor = styled.a`
margin: 0 1rem;
color: var(--primaryWhite);
text-decoration: none;
border-bottom: 4px solid var(--lemon);
padding-bottom: 3px;
  
&:hover {
color: var(--primaryWhite);
border-bottom: 4px solid var(--softPurple);
transition: 0.2s;
  }
`;

export const Img = styled.img`
  height: 100%;
`
export const Nav = styled.nav`
display: flex;
align-items: center;

@media only screen and (max-width:1024px) {
      position: fixed;
      top: -100vh;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      transition: 1s;
} 
`