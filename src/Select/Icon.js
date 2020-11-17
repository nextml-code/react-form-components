import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Icon = styled(FontAwesomeIcon)`
  margin-right: var(--aiwizo-application-spacing-small);
  font-size: var(--aiwizo-application-font-size-regular);
`;

const SelectArrowIcon = () => <Icon icon={faAngleDown} />;

export default SelectArrowIcon;
