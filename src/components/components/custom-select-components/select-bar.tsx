import React, { FC } from "react";
import { ISelectData } from "../../../mock/mock-data";
import { SelectValue } from "./select-value";

interface ISelectBar {
  optionsData: ISelectData[];
  selectValue: number[];
  setSelectValue: React.Dispatch<React.SetStateAction<number[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isSearchActive: boolean;
}

export const SelectBar: FC<ISelectBar> = ({
  optionsData,
  selectValue,
  setSelectValue,
  searchValue,
  setSearchValue,
  isSearchActive,
}) => {
  const currentSelectedOptions = optionsData.filter((element) =>
    selectValue.includes(element.id)
  );

  const isMultiChoiseMade = selectValue.length > 1;

  const selectedOptionsList = currentSelectedOptions.map((element) => (
    <SelectValue
      isMultiChoiseMade={isMultiChoiseMade}
      optionInfo={element}
      key={element.id}
    />
  ));

  return (
    <div
      className="select_body_bar"
      onClick={(e: any) =>
        setSelectValue(
          selectValue.filter((element) => element !== Number(e.target.id))
        )
      }
    >
      {selectedOptionsList}
      {isSearchActive && (
        <input
          className="select_body_bar_input"
          type="text"
          placeholder="choose option"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
      )}
    </div>
  );
};

//
