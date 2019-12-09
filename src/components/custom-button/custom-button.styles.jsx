import styled, { css, keyframes } from 'styled-components';

export const CustomButtonContainer = styled.button`
    width: auto;
    height:60px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: #3BC453;
    border-radius: 50px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: ${({isActive}) => isActive ? 'none' : 'flex' 
        };

    justify-content: center;
    align-items: center;
    &:hover {
        background-color: white;
        color: black;
        border:1px solid #3BC453;
    }
    
    &.inverted {
        background-color: #3BC453;
        color: black;
        border: 4px solid black;
        &:hover {
            background-color: #3BC453;
            color: white;
            border: none;
        }
    }

`;

const test = keyframes`
    0%{
        transform: scale(1.5);
    }
    100% {
        transform: scale(2);
    }
`;

// const animate = styled(test)`
//     animation: ${test}  5s linear infinite alternate;
// `;

export const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 2rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;   

    animation: ${({isActive}) => isActive ? css`${test} 1s ease-in-out forwards ` : ''};

   
`;


export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: #fff!important;
    border-radius: 2rem;
    box-shadow: 0 10px 32px 4px rgba(0, 0, 0, 0.2), 0 2px 6px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 4%;
`;

export const FormInputInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6% 0 6% 0;
    width: 100%;
`;



