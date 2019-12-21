import styled, { css, keyframes } from 'styled-components';

export const ContinueBtn = styled.button`
    width :100%;
    height:60px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;

    background-image: linear-gradient(to bottom right,#55D251, #4AC76C, #31B3C2); 
   
    border-radius: 50px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: ${({clicked}) => clicked ? 'none' : 'inline-block' 
        };

    justify-content: center;
    align-items: center;
    &:hover {
        background-color: white;
        color: black;
        border:1px solid #3BC453;
    }
    
`;

const open = keyframes`
 
 0%{
        transform: scale(0);
    }

10%{
    transform: scaleY(.2);
}

   100% {
        transform: scale(1);
    }

    
`;

const close = keyframes`
    0%{
        transform: scale(0);
    }

   100% {
        transform: scale(0);
    }
`;

export const WarningInner = styled.div `
    position: absolute;
    margin: 0 auto;
    color: #fff;
    
    
        h1,h2,h3,h4 {
        color: #fff;
    }
`;

export const WarningContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    background-color: green;
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    width: 100vw;
    background-image: linear-gradient(to bottom right,#55D251, #4AC76C, #31B3C2); 
    
    transform-origin: center 90%;
    animation: ${({clicked}) => clicked ? css`${open} 1s cubic-bezier(.48,0,.22,1.02) forwards ` : css`${close} 1s ease-in-out forwards `};

`;

export const UpdateLoanContainer = styled.div`
    max-height: 500px;
    margin: 8% 0 8% 0;
`;

export const UpdateLoan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 2rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* background-color: #fff!important; */
    border-radius: 2rem;
    /* box-shadow: 0 10px 32px 4px rgba(0, 0, 0, 0.2), 0 2px 6px 1px rgba(0, 0, 0, 0.1); */
    z-index: 1000;
    padding: 4%;
`;

export const InputWrapperInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6% 0 6% 0;
    width: 100%;
`;

export const RepaymentScheduleContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 60vw;
    box-sizing: border-box;
    border: none;

    * {
        background-color: #fff;
        padding: 10% 6% 8% 6%;
        box-sizing: border-box;
        height: 60px;
        transform: translateY(20%);
    }
    &__Week {
        border-radius: 25px 0 0 0;
        transition: transform .2s;
        outline: none;
            
    }

    &__Week:focus {
    background-color: #61A261;
    border-radius: 25px 12px 0 0;
    color: #fff;
    transform: scale(1.1, 1.1);
    -webkit-tap-highlight-color: transparent;
    }

    &__Fornight {
        transition: transform .2s;
        outline: none;
    }

    &__Fornight:focus {
        background-color: #61A261;
        border-radius:  20px 20px 0 0;
        color: #fff;
        transform: scale(1.1, 1.1);
        -webkit-tap-highlight-color: transparent;
        }

    &__Month {
        border-radius: 0 25px 0 0;
        transition: transform .2s;
        outline: none;
    }
    &__Month:focus {
        background-color: #61A261;
        border-radius: 12px 25px 0 0;
        color: #fff;
        transform: scale(1.1, 1.1);
        -webkit-tap-highlight-color: transparent;
        }
`;