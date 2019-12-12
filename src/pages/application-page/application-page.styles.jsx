import styled from 'styled-components';


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