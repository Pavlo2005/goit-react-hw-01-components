import styled from 'styled-components';

export const StatusAvatar = styled.div`
    position: absolute;
    top: 60px;
    left: 70px;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background-color: ${({ isOnline }) => {
        return isOnline ? 'green' : 'red'
    }};
`