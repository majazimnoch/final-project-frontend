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

`