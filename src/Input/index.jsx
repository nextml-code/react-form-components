import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Label from "../Label/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import defer from "@codewell/defer";
import targetValue from "@codewell/target-value";

const StyledInput = styled.input`
  border: none;
  font-family: var(--aiwizo-application-default-font);
  font-size: var(--aiwizo-application-font-size-regular);
  flex: 1;
  :focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  border-radius: var(--aiwizo-application-border-radius-primary);
  display: flex;
  align-items: center;
  padding: var(--aiwizo-application-spacing-mini)
    var(--aiwizo-application-spacing-small);
  border: 1px solid var(--aiwizo-application-primary-border-grey);
  ${(props) =>
    props.focus &&
    css`
      border-color: var(--aiwizo-application-primary-border-blue);
    `}
`;

const TypeIcon = styled(FontAwesomeIcon)`
  font-size: var(--aiwizo-application-font-size-small);
  margin-right: var(--aiwizo-application-spacing-mini);
  color: var(--aiwizo-application-faded-text-grey);
  ${(props) =>
    props.focus &&
    css`
      color: var(--aiwizo-application-blue);
    `}
`;

const RemoveIcon = styled(FontAwesomeIcon)`
  font-size: var(--aiwizo-application-font-size-small);
  color: var(--aiwizo-application-faded-text-grey);
  cursor: pointer;
  :hover {
    color: var(--aiwizo-application-red);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const handleFocus = (ref, setFocus) => {
  ref.current.focus();
  setFocus(true);
};

const Input = ({ label, icon, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <Wrapper
      onClick={defer(handleFocus, inputRef, setFocus)}
      onBlur={defer(setFocus, false)}
    >
      {label ? <Label>{label}</Label> : null}
      <InputWrapper focus={focus}>
        <TypeIcon icon={icon} focus={focus} />
        <StyledInput
          ref={inputRef}
          {...props}
          value={value}
          onChange={targetValue(setValue)}
        />
        <RemoveIcon icon={faTimes} onClick={defer(setValue, "")} />
      </InputWrapper>
    </Wrapper>
  );
};

export default Input;
