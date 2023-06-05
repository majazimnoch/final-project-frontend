import styled from 'styled-components';
import heroImage from 'assets/heroImg.png';

export const StyledHero = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;

    @media (min-width: 800px) {
    background-size: 100% 100%;
    }

    @media (min-width: 1024px) {
    background: none;

    .content {
        display: flex;
        width: 100%;
        height: 100%;

        .left {
        flex: 1;
        background-image: url(${heroImage});
        background-size: 100% 100%;
        background-position: center;
        }

        .right {
        flex: 1;
        background-color: #f9f7ff;
        display: flex;
        align-items: center;
        justify-content: center;
        }
    }
    }
`;

export const TextBlock = styled.div`
    flex-direction: column;
    padding: 4rem 2rem 4rem 2rem;

    @media (max-width: 1023px) {
    background-color: rgba(249, 247, 255, 0.7);
    width: 80vw;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 3rem;;
    color: #9685f1;

    @media (min-width: 668px) {
    font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
    font-size: 3.5rem;
    }
`;

export const StyledParagraph = styled.p`
    font-size: 0.9rem;
    margin-bottom: 3rem;;
    color: #141414;

    @media (min-width: 668px) {
    font-size: 1.3rem;
    }

    @media (min-width: 1024px) {
    font-size: 1.5rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (min-width: 668px) {
    gap: 2rem;
    }

    @media (min-width: 1024px) {
    gap: 3rem;
    }
`;