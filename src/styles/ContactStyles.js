import styled from "styled-components"

export const StyledContact = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      cursor: pointer;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: #fff;
      background-color: #333;
      border: none;
      border-radius: 4px;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #007bff;
      }
    }
  }
`
