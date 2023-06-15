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
`