
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: var(--aiwizo-application-border-radius-primary);
  padding: var(--aiwizo-application-spacing-small);
  background-color: var(--aiwizo-application-grey);
  border-bottom: 2px solid var(--aiwizo-application-grey-dark);
  color: #ffffff;
  font-weight: 700;
  font-size: var(--aiwizo-application-font-size-regular);
  cursor: pointer;
  :hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.08);
  }

  ${props => props.color === 'red' && css`
    background-color: var(--aiwizo-application-red);
    border-color: var(--aiwizo-application-red-dark);
  `}

  ${props => props.color === 'blue' && css`
    background-color: var(--aiwizo-application-blue);
    border-color: var(--aiwizo-application-blue-dark);
  `}

  ${props => props.color === 'green' && css`
    background-color: var(--aiwizo-application-green);
    border-color: var(--aiwizo-application-green-dark);
  `}

  ${props => props.type === 'secondary' && css`
    color: var(--aiwizo-application-grey);
    background-color: #ffffff;
    border: 1px solid var(--aiwizo-application-primary-border-grey);
    font-weight: 400;
    :hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.04);
    }
  `} 
`;

export default StyledButton;
