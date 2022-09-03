export interface ICurrentStyleSettings {
  fontStyle: IFontStyle;
  selectBar: ISelectBarStyle;
  selectBarValue: ISelectBarStyle;
  optionList: ISelectOptionList;
}

export interface IFontStyle {
  fontFamily?: string;
  fontSize?: string;
}

export const DEFAULT_FONT_STYLE: IFontStyle = {
  fontFamily: '"Roboto", "Times New Roman", sans-serif',
  fontSize: "16px",
};

export interface ISelectBarStyle {
  width?: string;
  height?: string;
  borderSize?: string;
  borderType?: string;
  fontColor?: string;
  borderColor?: string;
  borderRadius?: string;
  background?: string;
}

export const DEFAULT_SELECT_BAR_STYLE: ISelectBarStyle = {
  width: "350px",
  height: "50px",
  borderSize: "1px",
  borderType: "solid",
  borderColor: "black",
  borderRadius: "5px",
  background: "none",
  fontColor: "black",
};

export const DEFAULT_SELECT_BAR_VALUE_ICON_STYLE: ISelectBarStyle = {
  height: "35px",
  borderSize: "1px",
  borderType: "solid",
  borderColor: "lightgreen",
  borderRadius: "5px",
  background: "lightgreen",
  fontColor: "black",
};

export interface ISelectOptionList {
  listHeight?: string;
  optionHeight?: string;
  fontColor?: string;
  borderSize?: string;
  borderType?: string;
  borderColor?: string;
  dividerSize?: string;
  dividerType?: string;
  dividerColor?: string;
  borderRadius?: string;
  background?: string;
  activeBackground?: string;
}

export const DEFAULT_SELECT_OPTION_LIST: ISelectOptionList = {
  listHeight: "150px",
  optionHeight: "40px",
  fontColor: "black",
  borderSize: "1px",
  borderType: "solid",
  borderColor: "black",
  borderRadius: "5px",
  dividerSize: "1px",
  dividerType: "solid",
  dividerColor: "black",
  background: "none",
  activeBackground: "lightgreen",
};
