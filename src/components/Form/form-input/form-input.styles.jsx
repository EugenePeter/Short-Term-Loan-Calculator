import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
    top: 30px;
    font-size: 12px;
    color: ${mainColor};
`;

export const GroupContainer = styled.div`

    position: relative;
    display: flex;  
    flex-direction: row;
    justify-content: center;

    width: 90%

    input[type='password'] {
            letter-spacing: 0.3em;
        }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 18px 10px 18px 15px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 50px;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0 0 0;

    box-sizing: border-box;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 16px;
    top: 42px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`;
