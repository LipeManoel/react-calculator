import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 50px;
    font-size: 45px;
    border: none;
    margin: 3px;
    background: linear-gradient(135deg, #828185ff, #acacacff);
    color: #000000ff;
    font-family: monospace;
    font-weight: bold;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.1s ease-in-out;
    flex: 1;

    &:hover {
        transform: scale(0.97);
        cursor: pointer;
    }

    @media (max-width: 640px) {
        font-size: 30px;
        padding: 20px;
    }
    
    @media (max-width: 320px) {
        font-size: 25px;
        padding: 15px;
    }
`