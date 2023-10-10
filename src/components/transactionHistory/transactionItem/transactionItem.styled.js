import styled from 'styled-components';

export const Item = styled.tr`
    width: 33%;

    padding: 8px 0;

    border: 1px solid #000;
    border-collapse: collapse;

    text-align: center;

    background-color: ${({ index }) => {
        return index % 2 ? '#beeef2' : '#e3ebeb'
    }};
`