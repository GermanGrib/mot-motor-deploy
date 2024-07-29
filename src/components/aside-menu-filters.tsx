"use client";
import { useState } from "react";

import IconArrow from "@/components/icons/icon-arrow";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import FilterTypes from "@/types/enums/filter-types";

interface AsideMenuFiltersProps {
  // filterType: FilterTypes;
  filterType: string;
  title: string;
  values: string[];
  valueHiddenDefault?: boolean;
}

const AsideMenuFilters = ({
  filterType,
  values,
  title,
  valueHiddenDefault = true,
}: AsideMenuFiltersProps) => {
  const [isValuesHidden, setIsValuesHidden] = useState(valueHiddenDefault);

  const handleItemClick = () => {
    setIsValuesHidden(!isValuesHidden);
  };

  return (
    <li className="pb-4 border-b-2 border-b-mm-cement">
      <div
        className={`flex justify-between items-center cursor-pointer ${!isValuesHidden ? "mb-4" : "mb-0"}`}
        onClick={handleItemClick}
      >
        <h3 className="max-w-[140px] font-bold text-base">{title}</h3>
        <IconArrow flip={isValuesHidden} />
      </div>
      {!isValuesHidden && filterType === FilterTypes.checkBoxList && (
        <ul>
          {values.map((value, index) => {
            return (
              <li
                key={index}
                className="flex gap-1.5 items-center text-sm font-medium"
              >
                <Checkbox />
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      )}
      {!isValuesHidden && filterType === FilterTypes.rangeNumbers && (
        <div className="flex gap-1.5">
          <Input type="number" />
          <Input type="number" />
        </div>
      )}
    </li>
  );
};

export default AsideMenuFilters;
