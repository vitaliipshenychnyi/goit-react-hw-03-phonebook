import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #879cb7;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const TitleInput = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
`;

export const InputField = styled.input`
    padding: 5px;
    font-size: 24px;
    color: grey;
    text-align: center;
    font-weight: 500;
    border-color: #879cb7;
    border-radius: 5px;
    background-color: aliceblue;
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    outline: none;
`;

export const ButtonAdd = styled.button`
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    border-radius: 10px;
    border-color: #879cb7;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    background-color: #edf3fb;
    outline: none;
    &:hover {
        background-color: #879cb7;
        color: #edf3fb;
    }
`;
