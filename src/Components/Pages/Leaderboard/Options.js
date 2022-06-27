import React, { useEffect, useState } from "react";
import OptionsList from "../../Common/OptionsList";
import TextEntry from "../../Common/TextEntry";

export default function Options({
  entries,
  sortBy,
  name,
  gridSize,
  mode,
  setEntries,
  setSort,
  setName,
  setSize,
  setMode,
}) {
  const [filters, setFilters] = useState({});
  useEffect(() => {
    if (Object.values(filters).every((value) => !value)) {
      setName(""); //add % in the request
      setSize("");
      setMode("");
    }
  }, [filters, setMode, setName, setSize]);
  return (
    <div>
      <OptionsList
        title="Entries"
        setState={setEntries}
        state={entries}
        updateValues={[10, 25, 50]}
      />
      <OptionsList
        title="Sort by:"
        setState={setSort}
        state={sortBy}
        updateValues={["points", "grids solved", "penalties", "base score"]}
      />
      <OptionsList
        title="Filters:"
        setState={setFilters}
        state={filters}
        updateValues={["username", "grid size", "mode"]}
        multiselect
      />
      <div className="flex flex-col gap-2 p-4 ">
        {filters.username && (
          <div className="place-self-center ">
            <TextEntry
              input={name}
              setInput={setName}
              placeholder="Enter username"
            />
          </div>
        )}
        {filters["grid size"] && (
          <OptionsList
            setState={setSize}
            state={gridSize}
            updateValues={["10x10", "16x16", "16x30"]}
          />
        )}
        {filters.mode && (
          <OptionsList
            setState={setMode}
            state={mode}
            updateValues={["QuickMode", "Normal", "Chill & Casual"]}
          />
        )}
      </div>
    </div>
  );
}
