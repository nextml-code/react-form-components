import React, { useState } from "react";
import ComponentMap from "@codewell/component-map";
import styled from "styled-components";
import defer from "@codewell/defer";
import RenderGate from "@codewell/render-gate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  border: 1px solid var(--aiwizo-application-primary-border-grey);
  border-radius: var(--aiwizo-application-border-radius-primary);
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: var(--aiwizo-application-spacing-small);
  font-size: var(--aiwizo-application-font-size-regular);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--aiwizo-application-primary-border-grey);
`;

const OptionsWrapper = styled.div`
  max-height: 150px;
  overflow-y: scroll;
`;

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

const NoOptionWrapper = styled.div`
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  font-weight: 500;
  color: var(--aiwizo-application-faded-text-grey);
  padding: var(--aiwizo-application-spacing-small);
  font-style: italic;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: var(--aiwizo-application-font-size-regular);
  padding: var(--aiwizo-application-spacing-small);
  font-family: var(--aiwizo-application-default-font);
  font-weight: 600;
  flex: 1;
  :focus {
    outline: none;
  }
`;

const Option = (props) => (
  <OptionWrapper
    onClick={defer(props.onClick, props)}
    key={props[props.display]}
  >
    {props[props.display]}
  </OptionWrapper>
);

const filterOptions = (options, display) => (filter) =>
  options.filter((option) => option[display].includes(filter));

const updateFilter = (setFilter) => ({ target: { value } }) => {
  setFilter(value);
};

const Select = ({ options, display, callback }) => {
  const [filter, setFilter] = useState("");
  const [expanded, setExpanded] = useState(false);

  const optionsFilter = filterOptions(options, display);

  const select = (option) => {
    setExpanded(false);
    setFilter(option[display]);
    callback(option);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          onChange={updateFilter(setFilter)}
          onClick={defer(setExpanded, true)}
          value={filter}
          placeholder="Select an option..."
        />
        <Icon icon={faAngleDown} />
      </InputWrapper>
      <RenderGate condition={expanded}>
        <OptionsWrapper>
          <ComponentMap
            data={optionsFilter(filter)}
            component={Option}
            passProperties={{
              display,
              onClick: select,
            }}
            keyFunction={(option) => option[display]}
          />

          {optionsFilter(filter).length === 0 ? (
            <NoOptionWrapper>No option matches your filter...</NoOptionWrapper>
          ) : null}
        </OptionsWrapper>
      </RenderGate>
    </Wrapper>
  );
};

export default Select;
