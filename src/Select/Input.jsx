import React from "react";
import styled from "styled-components";
import defer from "@codewell/defer";
import SelectArrowIcon from "./Icon";
import RenderGate from "@codewell/render-gate";

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

const RenderedOption = styled.div`
  border: none;
  width: 100%;
  background-color: transparent;
  font-size: var(--aiwizo-application-font-size-regular);
  padding: var(--aiwizo-application-spacing-small);
  font-family: var(--aiwizo-application-default-font);
  font-weight: 600;
  flex: 1;
`;

const updateFilter = (state, dispatch) => ({ target: { value } }) => {
  dispatch({ type: "SET_FILTER", payload: value });
};

const Input = ({ state, dispatch, renderedOption }) => (
  <InputWrapper
    onClick={defer(dispatch, { type: "SET_EXPANDED", payload: true })}
  >
    <RenderGate condition={!state.showFilterInput}>
      <RenderedOption onClick={defer(dispatch, { type: "RESET_FILTER" })}>
        {renderedOption}
      </RenderedOption>
    </RenderGate>

    <RenderGate condition={state.showFilterInput}>
      <StyledInput
        onChange={updateFilter(state, dispatch)}
        value={state.filter}
        placeholder="Select an option..."
      />
    </RenderGate>

    <SelectArrowIcon />
  </InputWrapper>
);

export default Input;
