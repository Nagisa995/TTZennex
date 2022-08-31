import { FC, useState } from "react";
import { ISelectData } from "../../mock/mock-data";
import { SelectBar } from "./custom-select-components/select-bar";
import { SelectOptionsMenu } from "./custom-select-components/select-options-menu";

interface ICustomSelect {
  optionsData: ISelectData[];
  liveSearch?: boolean;
  multiChoice?: boolean;
}

export const CustomSelect: FC<ICustomSelect> = ({
  optionsData,
  liveSearch = false,
  multiChoice = false,
}) => {
  const defaultValue = optionsData[0];
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState([defaultValue.id]);

  const handleLeave = () => {
    setSearchValue("");
    setIsSelectMenuOpen(false);
  };

  return (
    <div
      className="select_body"
      onMouseLeave={handleLeave}
      onClick={() => setIsSelectMenuOpen(true)}
    >
      <SelectBar
        optionsData={optionsData}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        isSearchActive={liveSearch}
      />
      {isSelectMenuOpen && (
        <SelectOptionsMenu
          optionsData={optionsData}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          currentOptionFilter={searchValue}
          isMultiChoiceActive={multiChoice}
        />
      )}
    </div>
  );
};
