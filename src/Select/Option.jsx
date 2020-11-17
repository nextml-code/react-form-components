import defer from "@codewell/defer";
import React from "react";
import styled from "styled-components";

const OptionWrapper = styled.div`
  border-top: 1px solid var(--aiwizo-application-primary-border-grey);
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  padding: var(--aiwizo-application-spacing-small);
  :hover {
    background-color: var(--aiwizo-application-light-background-blue);
  }
  :first-child {
    border-top: none;
  }
`;

const Option = (props, index) => (
  <OptionWrapper onClick={defer(props.onClick, props)}>
    {props.renderAs(props, index)}
  </OptionWrapper>
);

export default Option;
