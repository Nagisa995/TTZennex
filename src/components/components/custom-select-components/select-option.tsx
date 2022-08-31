import { FC } from "react";
import { ISelectData } from "../../../mock/mock-data";

interface ISelectOption {
  optionData: ISelectData;
}

export const SelectOption: FC<ISelectOption> = ({ optionData }) => {
  return (
    <div className="select_body_options_option" id={optionData.id.toString()}>
      {optionData.title}
    </div>
  );
};
