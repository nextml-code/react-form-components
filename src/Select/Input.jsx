import React from "react";
import styled from "styled-components";
import defer from "@codewell/defer";
import SelectArrowIcon from "./Icon";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--aiwizo-application-primary-border-grey);
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  font-size: var(--aiwizo-application-font-size-regular);
  padding: var(--aiwizo-application-spacing-small);
  font-family: var(--aiwizo-application-default-font);
  font-weight: 600;
  flex: 1;
  :focus {
    outline: none;
  }
`;

const updateFilter = (setFilter) => ({ target: { value } }) => {
  setFilter(value);
};

const Input = ({ setFilter, setExpanded, filter }) => (
  <InputWrapper>
    <StyledInput
      onChange={updateFilter(setFilter)}
      onClick={defer(setExpanded, true)}
      value={filter}
      placeholder="Select an option..."
    />
    <SelectArrowIcon />
  </InputWrapper>
);

export default Input;
