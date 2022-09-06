import { FC, useState } from "react";
import { mockData } from "../mock/mock-data";
import { CustomSelect } from "./components/custom-select";

export const App: FC = () => {
  const [testValue, setTestValue] = useState([1]);

  return (
    <div className="testBody">
      <div style={{ padding: "1rem" }}>
        <CustomSelect
          optionsData={mockData}
          tabIndex={1}
          liveSearch={true}
          valueOnUI="icon"
          setValue={setTestValue}
          selectPlaceholder="anmwpodqmn"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
      </div>

      <div style={{ padding: "1rem" }}>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
      </div>

      <div style={{ padding: "1rem" }}>
        <CustomSelect
          optionsData={mockData}
          tabIndex={3}
          multiSelect={true}
          liveSearch={true}
          optionIcon={true}
          setValue={setTestValue}
          liveSearchPlaceholder="[dpqwmo,q[pd"
          selectBarOptionListStyleSettings={{
            borderSize: "4px",
            borderRadius: "7px",
            listHeight: "400px",
            dividerSize: "3px",
            dividerType: "dotted",
            borderColor: "coral",
            background: "red",
          }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
      </div>

      <div style={{ padding: "1rem" }}>
        <CustomSelect
          optionsData={mockData}
          tabIndex={4}
          multiSelect={true}
          valueOnUI="icon"
          setValue={setTestValue}
          defaultValue={testValue}
          maxOptionSelect={3}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem voluptas quas distinctio inventore harum quia laudantium.
          Ut repellendus minima, velit molestiae, esse ipsa hic odio facere
          nulla, delectus similique.
        </p>
      </div>
    </div>
  );
};
