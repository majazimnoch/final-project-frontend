import styled, { css } from 'styled-components';

export const Pinside = styled.p`
color: var(--primaryBlack);
font-size: 16px;
margin:0.4rem;

${(styling) => styling.bold && css`
font-weight: bold;
`
} 

${(styling) => styling.obs && css`
font-weight: bold;
font-size: 30px;
`
} 

${(styling) => styling.uppercase && css`
text-transform: uppercase;
letter-spacing: 1px;
color: var(primaryWhite);
`
}

${(styling) => styling.details && css`
font-size: 14px;
`
}

${(styling) => styling.white && css`
color:var(--primaryWhite);
`
}

${(styling) => styling.lemon && css`
color:var(--lemon);
font-size: 2rem;
`
}
`

export const ButtonPrimary = styled.button`
  background-color: var(--softPurple);
  color: var(--primaryWhite);
  font-size: var(--fontSize);
  border: 1.5px solid var(--softPurple);
  border-radius: 30px;
  height: 50px;
  padding: 0 4.5rem;
  
  &:hover {
    background-color: var(--lemon);
    color: var(--primaryBlack);
    transition: 0.2s;
  }
  `
export const InputPrimary = styled.input`
height: 3rem;
padding: 0 1.5rem;
border-radius: 10px;
border: 1px var(--primaryBlack) solid;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

&:focus {
  outline: 0.5px solid var(--softPurple);
}

@media (max-width: 1023px) {

}

`;