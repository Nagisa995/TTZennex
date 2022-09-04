import { FC, useState } from "react";
import { mockData } from "../mock/mock-data";
import { CustomSelect } from "./components/custom-select";

export const App: FC = () => {
  const [testValue, setTestValue] = useState([1]);

  return (
    <div className="testBody">
      <CustomSelect
        optionsData={mockData}
        liveSearch={true}
        valueOnUI="icon"
        setValue={setTestValue}
        selectPlaceholder="anmwpodqmn"
      />
      <CustomSelect
        optionsData={mockData}
        setValue={setTestValue}
        selectBarStyleSettings={{
          width: "600px",
          borderColor: "green",
          fontColor: "red",
          background: "lightgrey",
        }}
      />
      <CustomSelect
        optionsData={mockData}
        multiSelect={true}
        liveSearch={true}
        optionIcon={true}
        setValue={setTestValue}
        liveSearchPlaceholder="[dpqwmo,q[pd"
        selectBarOptionListStyleSettings={{
          listHeight: "400px",
          dividerSize: "3px",
          dividerType: "dotted",
          borderColor: "coral",
        }}
      />
      <CustomSelect
        optionsData={mockData}
        multiSelect={true}
        valueOnUI="icon"
        setValue={setTestValue}
        defaultValue={testValue}
        maxOptionSelect={3}
      />
    </div>
  );
};
