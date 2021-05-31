import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--aiwizo-application-border-radius-primary);
  border: 1px solid var(--aiwizo-application-primary-border-grey);
  width: 18px;
  height: 18px;
  background-color: #ffffff;
`;

const StyledLabel = styled.span`
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  margin-left: var(--aiwizo-application-spacing-small);
  color: var(--aiwizo-application-grey-dark);
`;

const handleEvent = (onChange, setChecked, value, checked) => () => {
  onChange({ value, checked: !checked });
  setChecked(!checked);
};

const Checkbox = ({ onChange, value, label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper>
      <StyledCheckbox
        type="button"
        onClick={handleEvent(onChange, setChecked, value, checked)}
      >
        {checked ? (
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              color: "var(--aiwizo-application-green)",
              fontSize: "12px",
            }}
          />
        ) : null}
      </StyledCheckbox>
      <StyledLabel>{label}</StyledLabel>
    </Wrapper>
  );
};

export default Checkbox;
