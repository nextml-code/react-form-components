import React, { useState } from "react";
import RenderGate from "@codewell/render-gate";
import Options from "./Options";
import Wrapper from "./Wrapper";
import Input from "./Input";

const Select = ({ options, renderAs, onSelect }) => {
  const [filter, setFilter] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <Wrapper>
      <Input setExpanded={setExpanded} setFilter={setFilter} filter={filter} />
      <RenderGate condition={expanded}>
        <Options
          options={options}
          filter={filter}
          renderAs={renderAs}
          onSelect={onSelect}
          setExpanded={setExpanded}
          setFilter={setFilter}
        />
      </RenderGate>
    </Wrapper>
  );
};

export default Select;
