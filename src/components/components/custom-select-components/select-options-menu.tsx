import { FC } from "react";
import { ISelectData } from "../../../mock/mock-data";
import { SelectOption } from "./select-option";

interface ISelectOptionsMenu {
  currentOptionFilter: string;
  optionsData: ISelectData[];
  selectValue: number[];
  setSelectValue: React.Dispatch<React.SetStateAction<number[]>>;
  isMultiChoiceActive: boolean;
}

export const SelectOptionsMenu: FC<ISelectOptionsMenu> = ({
  optionsData,
  setSelectValue,
  selectValue,
  currentOptionFilter,
  isMultiChoiceActive,
}) => {
  const currentOptionsList = optionsData.filter(
    (element) =>
      element.title.includes(currentOptionFilter) &&
      !selectValue.includes(element.id)
  );

  const selectOptionList = currentOptionsList.map((element) => (
    <SelectOption optionData={element} key={element.id} />
  ));

  const isSelectOptionListEmpty = selectOptionList.length === 0;

  return (
    <div
      className="select_body_options"
      onClick={(e: any) => {
        setSelectValue(
          isMultiChoiceActive
            ? [Number(e.target.id), ...selectValue]
            : [Number(e.target.id)]
        );
      }}
    >
      {(isSelectOptionListEmpty && <div>Not found options</div>) ||
        selectOptionList}
    </div>
  );
};
