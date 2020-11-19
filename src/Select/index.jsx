import React, { useEffect, useReducer } from "react";
import RenderGate from "@codewell/render-gate";
import Options from "./Options";
import Wrapper from "./Wrapper";
import Input from "./Input";
import superSearch from "@codewell/super-search";

const initialState = {
  filter: "",
  expanded: false,
  selectedOption: -1,
  showFilterInput: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EXPANDED": {
      return {
        ...state,
        expanded: action.payload,
      };
    }

    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case "SET_SELECTED_OPTION": {
      return {
        ...state,
        selectedOption: action.payload,
      };
    }

    case "SELECT_OPTION": {
      return {
        ...state,
        expanded: false,
        showFilterInput: false,
        filter: "",
        selectedOption: action.payload,
      };
    }

    case "RESET_FILTER": {
      return {
        ...state,
        filter: "",
        showFilterInput: true,
        expanded: false,
      };
    }

    default: {
      return state;
    }
  }
};

const renderSelectedOption = (state, options, renderAs) => {
  if (state.selectedOption === -1) {
    return "";
  }

  return renderAs(options[state.selectedOption]);
};

const filterOptions = (options, filter) =>
  options.filter((option) => superSearch(filter, option).numberOfMatches > 0);

const Select = ({ options, renderAs, onSelect, defaultIndex = -1 }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_SELECTED_OPTION", payload: defaultIndex });
  }, [defaultIndex]);

  return (
    <Wrapper>
      <Input
        state={state}
        dispatch={dispatch}
        renderedOption={renderSelectedOption(state, options, renderAs)}
      />

      <RenderGate condition={state.expanded}>
        <Options
          state={state}
          dispatch={dispatch}
          options={filterOptions(
            options.map((option, index) => ({ ...option, optionIndex: index })),
            state.filter,
          )}
          renderAs={renderAs}
          onSelect={onSelect}
        />
      </RenderGate>
    </Wrapper>
  );
};

export default Select;
