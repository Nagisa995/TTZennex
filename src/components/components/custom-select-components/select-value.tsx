import { FC } from "react";
import { ISelectData } from "../../../mock/mock-data";

export interface ISelectValue {
  optionInfo: ISelectData;
  isMultiChoiseMade: boolean;
}

export const SelectValue: FC<ISelectValue> = ({
  optionInfo,
  isMultiChoiseMade,
}) => {
  return (
    <div className="select_body_bar_value">
      {optionInfo.title}
      {isMultiChoiseMade && (
        <div
          className="select_body_bar_value_delete"
          id={optionInfo.id.toString()}
        >
          x
        </div>
      )}
    </div>
  );
};
