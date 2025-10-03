import React from "react";
import SelectDropdown from "../../../components/Common/dropdown";

function FilterListing() {
  return (
    <div className="f-listing-row flex items-center justify-between mb-5 flex-wrap gap-4">
      <div className="select-col grid  grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 flex-wrap">
        <SelectDropdown />
        <SelectDropdown />
        <SelectDropdown />
        <SelectDropdown />
      </div>
      <div className="sort-by-col">
        <SelectDropdown />
      </div>
    </div>
  );
}

export default FilterListing;
