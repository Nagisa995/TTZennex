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
        value={setTestValue}
        selectPlaceholder='anmwpodqmn'
      />
      <CustomSelect optionsData={mockData} value={setTestValue} />
      <CustomSelect
        optionsData={mockData}
        multiSelect={true}
        liveSearch={true}
        optionIcon={true}
        value={setTestValue}
        liveSearchPlaceholder='[dpqwmo,q[pd'
      />
      <CustomSelect
        optionsData={mockData}
        multiSelect={true}
        valueOnUI="icon"
        value={setTestValue}
      />
    </div>
  );
};
