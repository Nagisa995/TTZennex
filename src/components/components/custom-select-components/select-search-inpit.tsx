import { FC } from "react";
import { ICurrentStyleSettings } from "./default_style_parameters";

interface ISelectSearchInput {
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  clearIcon: string;
  styleSettings: ICurrentStyleSettings;
}

export const SelectSearchInput: FC<ISelectSearchInput> = ({
  value,
  handleChange,
  placeholder,
  clearIcon,
  styleSettings,
}) => {
  return (
    <div
      style={{
        maxHeight: `${styleSettings.optionList.optionHeight}`,
        borderBottom: `${styleSettings.optionList.dividerSize} ${styleSettings.optionList.dividerType} ${styleSettings.optionList.dividerColor}`,
        borderRadius: `${styleSettings.optionList.borderRadius}`,
      }}
      className="select_input"
    >
      <input
        type="text"
        style={{
          fontSize: `${styleSettings.fontStyle.fontSize}`,
          color: `${styleSettings.optionList.fontColor}`,
        }}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      ></input>
      <img
        onClick={() => handleChange("")}
        className="select_input_clear"
        src={clearIcon}
        alt=""
      />
    </div>
  );
};
