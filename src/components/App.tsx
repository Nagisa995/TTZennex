import { FC } from "react";
import { mockData } from "../mock/mock-data";
import { CustomSelect } from "./components/custom-select";

export const App: FC = () => {
  return (
    <div className="testBody">
      <CustomSelect optionsData={mockData} liveSearch={true} />
      <CustomSelect optionsData={mockData} />
      <CustomSelect
        optionsData={mockData}
        multiChoice={true}
        liveSearch={true}
      />
      <CustomSelect optionsData={mockData} multiChoice={true} />
    </div>
  );
};
