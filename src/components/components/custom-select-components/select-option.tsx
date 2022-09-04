import { FC } from "react";
import { getBorderStyle } from "../../../helpers/utils";
import { ISelectData } from "../../../mock/mock-data";
import { ICurrentStyleSettings } from "./default_style_parameters";

interface ISelectOption {
  optionData: ISelectData;
  isActiveOption: boolean;
  isIconActive: boolean;
  styleSettings: ICurrentStyleSettings;
  isFirstChild: boolean;
}

export const SelectOption: FC<ISelectOption> = ({
  optionData,
  isActiveOption,
  isIconActive,
  styleSettings,
  isFirstChild,
}) => {
  return (
    <div
      style={{
        minHeight: `${styleSettings.optionList.optionHeight}`,
        background: `${
          isActiveOption
            ? styleSettings.optionList.activeBackground
            : styleSettings.optionList.background
        }`,
        borderTop: isFirstChild
          ? "none"
          : getBorderStyle(
              styleSettings.optionList.dividerSize,
              styleSettings.optionList.dividerType,
              styleSettings.optionList.dividerColor
            ),
      }}
      className="select_body_options_list_option"
      id={optionData.id.toString()}
    >
      {isIconActive && <img src={optionData.thumbnailUrl} />}
      {optionData.title}
    </div>
  );
};
