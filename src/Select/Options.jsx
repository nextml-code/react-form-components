import React from "react";
import ComponentMap from "@codewell/component-map";
import styled from "styled-components";
import Option from "./Option";
import defer from "@codewell/defer";

const OptionsWrapper = styled.div`
  max-height: 150px;
  overflow-y: scroll;
`;

const NoOptionWrapper = styled.div`
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  font-weight: 500;
  color: var(--aiwizo-application-faded-text-grey);
  padding: var(--aiwizo-application-spacing-small);
  font-style: italic;
`;

const EmptyOption = styled.div`
  border-top: 1px solid var(--aiwizo-application-primary-border-grey);
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  padding: var(--aiwizo-application-spacing-small);
  color: var(--aiwizo-application-faded-text-grey);
  :hover {
    background-color: var(--aiwizo-application-light-background-blue);
  }
  :first-child {
    border-top: none;
  }
`;

const Options = ({ dispatch, options, renderAs, onSelect }) => {
  return (
    <OptionsWrapper>
      <EmptyOption onClick={defer(dispatch, { type: "RESET_FILTER" })}>
        Select an option...
      </EmptyOption>
      <ComponentMap
        data={options}
        component={Option}
        commonProperties={{
          renderAs,
          onClick: (option) => {
            dispatch({ type: "SELECT_OPTION", payload: option.optionIndex });
            onSelect(option);
          },
        }}
        keyFunction={(_, index) => index}
      />

      {options.length === 0 ? (
        <NoOptionWrapper>No option matches your filter...</NoOptionWrapper>
      ) : null}
    </OptionsWrapper>
  );
};

export default Options;
