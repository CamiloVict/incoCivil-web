import styled from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

export const FormContainer = styled.div`
  max-width: ${sizes.mobileL};
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 5px;
  }
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  border: 1px solid #0000004c;
  margin: 5px;
  :focus {
    outline: 1px solid #03a0d463;
  }
`;

export const SubmitInput = styled.button`
  height: 50px;
  border-radius: 5px;
  border: 1px solid #0000004c;
  margin: 20px 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  transition: all ease-in-out 300ms;

  :hover {
    background-color: #30add6;
    color: white;
  }
`;

export const FileInput = styled.input`
  margin: 5px;
`;
