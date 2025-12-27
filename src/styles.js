import styled from 'styled-components'; 

export const Container = styled.div`  
    width: 100%;
    height: 100vh;

    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const Content = styled.div`
    background-color: #777777ff;
    padding: 20px;
    border-radius: 20px;

    width: 50%;
    height: auto; 
    
    @media (max-width: 1020px) {
        width: auto;
        height: auto; 
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`