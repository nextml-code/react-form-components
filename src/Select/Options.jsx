import React from "react";
import ComponentMap from "@codewell/component-map";
import styled from "styled-components";
import superSearch from "@codewell/super-search";
import Option from "./Option";

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

const filterOptions = (options, filter) =>
  options.filter((option) => superSearch(filter, option).numberOfMatches > 0);

const select = (setExpanded, setFilter, callback, renderAs) => (option) => {
  setExpanded(false);
  setFilter(renderAs(option));
  callback(option);
};

const Options = ({
  filter,
  options,
  renderAs,
  setExpanded,
  setFilter,
  callback,
}) => {
  const filteredOptions = filterOptions(options, filter);

  return (
    <OptionsWrapper>
      <ComponentMap
        data={filteredOptions}
        component={Option}
        passProperties={{
          renderAs,
          onClick: select(setExpanded, setFilter, callback, renderAs),
        }}
        keyFunction={(_, index) => index}
      />

      {filteredOptions.length === 0 ? (
        <NoOptionWrapper>No option matches your filter...</NoOptionWrapper>
      ) : null}
    </OptionsWrapper>
  );
};

export default Options;
