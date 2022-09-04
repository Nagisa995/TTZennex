import { FC, useState } from "react";
import { ISelectData } from "../../../mock/mock-data";
import { OptionNotFound } from "./select-search-not-found";
import { SelectOption } from "./select-option";
import { SelectSearchInput } from "./select-search-inpit";
import { changeSelectValue, getBorderStyle } from "../../../helpers/utils";
import { ICurrentStyleSettings } from "./default_style_parameters";

interface ISelectOptionsMenu {
  optionsData: ISelectData[];
  selectValue: number[];
  setSelectValue: React.Dispatch<React.SetStateAction<number[]>>;
  isMultiSelectActive: boolean;
  maxOptionSelect: number;
  isLiveSearchActive: boolean;
  isOptionIconActive: boolean;
  searchPlaceholder: string;
  liveSearchClearIcon: string;
  styleSettings: ICurrentStyleSettings;
}

export const SelectOptionsMenu: FC<ISelectOptionsMenu> = ({
  optionsData,
  setSelectValue,
  selectValue,
  isMultiSelectActive,
  maxOptionSelect,
  isLiveSearchActive,
  isOptionIconActive,
  searchPlaceholder,
  liveSearchClearIcon,
  styleSettings,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const currentOptionList = isLiveSearchActive
    ? optionsData.filter((element) => element.title.includes(searchValue))
    : optionsData;

  const selectOptionList = currentOptionList.map((element, index) => (
    <SelectOption
      optionData={element}
      key={element.id}
      isActiveOption={selectValue.includes(element.id)}
      isIconActive={isOptionIconActive}
      styleSettings={styleSettings}
      isFirstChild={index === 0}
    />
  ));

  const isSelectOptionListEmpty = selectOptionList.length === 0;

  return (
    <div
      className="select_body_options"
      style={{
        border: getBorderStyle(
          styleSettings.optionList.borderSize,
          styleSettings.optionList.borderType,
          styleSettings.optionList.borderColor
        ),
        borderTop: "none",
        borderRadius: `${styleSettings.optionList.borderRadius}`,
        fontSize: `${styleSettings.fontStyle.fontSize}`,
        color: `${styleSettings.optionList.fontColor}`,
      }}
    >
      {isLiveSearchActive && (
        <SelectSearchInput
          value={searchValue}
          handleChange={setSearchValue}
          placeholder={searchPlaceholder}
          clearIcon={liveSearchClearIcon}
          styleSettings={styleSettings}
        />
      )}
      <div
        className="select_body_options_list"
        style={{ maxHeight: `${styleSettings.optionList.listHeight}` }}
        onClick={(e: any) => {
          const isValueOverLimit = selectValue.length >= maxOptionSelect;
          if (isValueOverLimit) return;

          setSelectValue(
            changeSelectValue(
              Number(e.target.id),
              selectValue,
              isMultiSelectActive
            )
          );
        }}
      >
        {(isSelectOptionListEmpty && <OptionNotFound />) || selectOptionList}
      </div>
    </div>
  );
};
