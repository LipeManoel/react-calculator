import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 50px;
    font-size: 45px;
    border: none;
    margin: 3px;
    background: linear-gradient(135deg, #3c27b4, #6a5acd);
    color: #000000ff;
    font-family: 'Roboto';
    font-weight: bold;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    flex: 1;

    &:hover {
        transform: scale(0.95);
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