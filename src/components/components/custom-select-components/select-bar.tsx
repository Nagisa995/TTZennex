import React, { FC } from "react";
import { VALUE_ON_UI } from "../../../helpers/const";
import { ISelectData } from "../../../mock/mock-data";
import { ICurrentStyleSettings } from "./default_style_parameters";
import { SelectValue } from "./select-value";

interface ISelectBar {
  optionsData: ISelectData[];
  selectValue: number[];
  setSelectValue: React.Dispatch<React.SetStateAction<number[]>>;
  valueOnUI: string;
  isSelectMenuOpen: boolean;
  setIsSelectMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder: string;
  selectBarIconSRC: string;
  selectBarValueIconSRC: string;
  styleSettings: ICurrentStyleSettings;
}

export const SelectBar: FC<ISelectBar> = ({
  optionsData,
  selectValue,
  setSelectValue,
  valueOnUI,
  isSelectMenuOpen,
  setIsSelectMenuOpen,
  placeholder,
  selectBarIconSRC,
  selectBarValueIconSRC,
  styleSettings,
}) => {
  const currentSelectedOptions = optionsData.filter((element) =>
    selectValue.includes(element.id)
  );

  const isSelectedOptionListIsNotEmpty = currentSelectedOptions.length !== 0;

  const isValueOnUIIsIcon = valueOnUI === VALUE_ON_UI.ICON;

  const selectedOptionsList = isValueOnUIIsIcon
    ? currentSelectedOptions.map((element) => (
        <SelectValue
          optionInfo={element}
          key={element.id}
          deleteIcon={selectBarValueIconSRC}
          styleSettings={styleSettings.selectBarValue}
        />
      ))
    : currentSelectedOptions.map((element) => element.title).join(", ");

  return (
    <div
      className="select_body_bar"
      style={{
        border: `${styleSettings.selectBar.borderSize} ${styleSettings.selectBar.borderType} ${styleSettings.selectBar.borderColor}`,
        width: `${styleSettings.selectBar.width}`,
        minHeight: `${styleSettings.selectBar.height}`,
        borderRadius: `${styleSettings.selectBar.borderRadius}`,
        background: `${styleSettings.selectBar.background}`,
        fontSize: `${styleSettings.fontStyle.fontSize}`,
        color: `${styleSettings.selectBar.fontColor}`,
      }}
      onClick={(e: any) => {
        if (!isValueOnUIIsIcon) {
          return;
        }
        setSelectValue(
          selectValue.filter((element) => element !== Number(e.target.id))
        );
      }}
    >
      <div className="select_body_bar_list">
        {(isSelectedOptionListIsNotEmpty && selectedOptionsList) || placeholder}
      </div>

      <div className="select_body_bar_icon">
        <img
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setIsSelectMenuOpen(!isSelectMenuOpen);
          }}
          src={selectBarIconSRC}
          alt=""
        />
      </div>
    </div>
  );
};
