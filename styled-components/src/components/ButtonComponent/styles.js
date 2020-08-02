import {
    rgba
} from 'polished';
import styled from 'styled-components';

const planckLength = '8px';

const blur = planckLength;
const colorBlack = '#31456a';
const colorWhite = '#fff';
const fontSizeLarge = '22px';
const shadow = planckLength;

export const Button = styled.button`
    border: none;
    cursor: pointer;
    font-family: sans-serif;
    font-size: ${fontSizeLarge};
    font-weight: bold;
    outline: none;
`;

export const ButtonPrimary = styled(Button)`
    background-color: transparent;
    background: linear-gradient(to bottom right, ${rgba(colorBlack, 0.05)}, ${rgba(colorWhite, 0.9)});
    border-radius: calc(${planckLength} * 2);
    box-shadow: ${shadow} ${shadow} ${blur} ${rgba(colorBlack, 0.6)}, -${shadow} -${shadow} ${blur} ${rgba(colorWhite, 0.6)};
    box-sizing: border-box;
    color: ${colorBlack};
    min-height: calc(${planckLength} * 6);
    padding: ${planckLength} calc(${planckLength} * 2);
`;
