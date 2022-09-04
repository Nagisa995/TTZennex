import { FC } from "react";
import { getBorderStyle } from "../../../helpers/utils";
import { ISelectData } from "../../../mock/mock-data";
import { ISelectBarStyle } from "./default_style_parameters";

export interface ISelectValue {
  optionInfo: ISelectData;
  deleteIcon: string;
  styleSettings: ISelectBarStyle;
}

export const SelectValue: FC<ISelectValue> = ({
  optionInfo,
  deleteIcon,
  styleSettings,
}) => {
  return (
    <div
      className="select_body_bar_list_value"
      style={{
        minHeight: `${styleSettings.height}`,
        background: `${styleSettings.background}`,
        border: getBorderStyle(
          styleSettings.borderSize,
          styleSettings.borderType,
          styleSettings.borderColor
        ),
        borderRadius: `${styleSettings.borderRadius}`,
        color: `${styleSettings.fontColor}`,
      }}
    >
      {optionInfo.title}
      <div className="select_body_bar_list_value_delete">
        <img id={optionInfo.id.toString()} src={deleteIcon} alt="" />
      </div>
    </div>
  );
};
