import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;

    display:flex;
    align-items: center;
    justify-content: flex-end;

    input {
        width: 100%;
        height: 75px;
        background-color: #000000ff;
        color: #ffffffff;
        border: none;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 12px;
        font-size: 45px;
        font-family: monospace;
}

        margin-bottom: 10px;
    }

    @media (max-width: 640px) {
        input {
            font-size: 30px;
        }
    }

    @media (max-width: 320px) {
        input {
            font-size: 25px;
        }
    }
`