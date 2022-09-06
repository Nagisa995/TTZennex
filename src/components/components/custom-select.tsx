import { FC, useEffect, useState } from "react";
import {
  DEFAULT_TAB_INDEX,
  DELETE_ICON_SRC,
  EMPTY_SELECT_MESSAGE,
  SEARCH_PLACEHOLDER,
  SELECT_BAR_ICON_SRC,
  VALUE_ON_UI,
} from "../../helpers/const";
import { getCurrentStyleSettings } from "../../helpers/utils";
import { ISelectData } from "../../mock/mock-data";
import {
  ICurrentStyleSettings,
  IFontStyle,
  ISelectBarStyle,
  ISelectOptionList,
} from "./custom-select-components/default_style_parameters";
import { SelectBar } from "./custom-select-components/select-bar";
import { SelectOptionsMenu } from "./custom-select-components/select-options-menu";

interface ICustomSelect {
  optionsData: ISelectData[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  tabIndex?: number;
  defaultValue?: number[];
  multiSelect?: boolean;
  maxOptionSelect?: number;
  selectPlaceholder?: string;
  selectBarIconSRC?: string;
  selectBarValueIconSRC?: string;
  valueOnUI?: string;
  liveSearch?: boolean;
  liveSearchPlaceholder?: string;
  liveSearchClearIcon?: string;
  optionIcon?: boolean;
  selectFontStyle?: IFontStyle;
  selectBarStyleSettings?: ISelectBarStyle;
  selectBarValueIconStyleSettings?: ISelectBarStyle;
  selectBarOptionListStyleSettings?: ISelectOptionList;
}

export const CustomSelect: FC<ICustomSelect> = ({
  optionsData,
  setValue,
  defaultValue = [],
  tabIndex = DEFAULT_TAB_INDEX,
  liveSearch = false,
  multiSelect = false,
  maxOptionSelect = Infinity,
  selectPlaceholder = EMPTY_SELECT_MESSAGE,
  selectBarIconSRC = SELECT_BAR_ICON_SRC,
  selectBarValueIconSRC = DELETE_ICON_SRC,
  valueOnUI = VALUE_ON_UI.STRING,
  optionIcon = false,
  liveSearchPlaceholder = SEARCH_PLACEHOLDER,
  liveSearchClearIcon = DELETE_ICON_SRC,
  selectBarStyleSettings = {},
  selectFontStyle = {},
  selectBarValueIconStyleSettings = {},
  selectBarOptionListStyleSettings = {},
}) => {
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(defaultValue);

  const currentStyleSettings: ICurrentStyleSettings = getCurrentStyleSettings(
    selectFontStyle,
    selectBarStyleSettings,
    selectBarValueIconStyleSettings,
    selectBarOptionListStyleSettings
  );

  useEffect(() => {
    setValue(selectValue);
  }, [selectValue]);

  return (
    <div
      className="select_body"
      style={{
        fontFamily: `${currentStyleSettings.fontStyle.fontFamily}`,
        width: `${currentStyleSettings.selectBar.width}`,
      }}
      tabIndex={tabIndex}
      onFocus={(e) => {
        setIsSelectMenuOpen(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget))
          setIsSelectMenuOpen(false);
      }}
    >
      <SelectBar
        optionsData={optionsData}
        valueOnUI={valueOnUI}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        isSelectMenuOpen={isSelectMenuOpen}
        setIsSelectMenuOpen={setIsSelectMenuOpen}
        selectBarIconSRC={selectBarIconSRC}
        selectBarValueIconSRC={selectBarValueIconSRC}
        placeholder={selectPlaceholder}
        styleSettings={currentStyleSettings}
      />
      {isSelectMenuOpen && (
        <SelectOptionsMenu
          optionsData={optionsData}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          isMultiSelectActive={multiSelect}
          maxOptionSelect={maxOptionSelect}
          isLiveSearchActive={liveSearch}
          isOptionIconActive={optionIcon}
          searchPlaceholder={liveSearchPlaceholder}
          liveSearchClearIcon={liveSearchClearIcon}
          styleSettings={currentStyleSettings}
        />
      )}
    </div>
  );
};
