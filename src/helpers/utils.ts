import {
  DEFAULT_FONT_STYLE,
  DEFAULT_SELECT_BAR_STYLE,
  DEFAULT_SELECT_BAR_VALUE_ICON_STYLE,
  DEFAULT_SELECT_OPTION_LIST,
  ICurrentStyleSettings,
  IFontStyle,
  ISelectBarStyle,
  ISelectOptionList,
} from "../components/components/custom-select-components/default_style_parameters";

export const changeSelectValue = (
  optionID: number,
  currentValue: number[],
  isMultiSelectActive: boolean
): number[] => {
  const isOptionIDInCurrentValue = currentValue.includes(optionID);

  if (isOptionIDInCurrentValue) {
    return currentValue.filter((option) => option !== optionID);
  } else {
    return isMultiSelectActive ? [optionID, ...currentValue] : [optionID];
  }
};

export const getCurrentStyleSettings = (
  fontStyle: IFontStyle,
  barStyle: ISelectBarStyle,
  barValueStyle: ISelectBarStyle,
  optionList: ISelectOptionList
): ICurrentStyleSettings => {
  return {
    fontStyle: { ...DEFAULT_FONT_STYLE, ...fontStyle },
    selectBar: { ...DEFAULT_SELECT_BAR_STYLE, ...barStyle },
    selectBarValue: {
      ...DEFAULT_SELECT_BAR_VALUE_ICON_STYLE,
      ...barValueStyle,
    },
    optionList: {
      ...DEFAULT_SELECT_OPTION_LIST,
      ...optionList,
    },
  };
};

export const getBorderStyle = (
  size: string = "",
  type: string = "",
  color: string = ""
): string => {
  return `${size} ${type} ${color}`;
};

export const caseInsensitiveComparison = (
  title: string,
  filter: string
): boolean => {
  return title.toLowerCase().includes(filter.trim().toLowerCase());
};
