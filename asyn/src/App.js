import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import debounce from "lodash/debounce";

const App = () => {
  const [selectedData, setSelectedData] = useState([]);

  //Styles for filter //
  const customStyles = {
    control: (provided, state) => {
      return {
        ...provided,
        minHeight: 56,
        border: "1px solid #e0e0e0",
        // width: '240px',
        borderRadius: "8px",
      };
    },
    menu: (provided, state) => {
      return {
        ...provided,
        zIndex: 2,
      };
    },
  };
  /*Contet Filter Api  */
  const promiseTypeDataOptions = (inputValue, resolve) => {
    /* api contect and set it into the state */
    setSelectedData(/**updated data */);
  };

  const loadTypeData = debounce(promiseTypeDataOptions, 300);
  return (
    <div style={{ width: "25%" }}>
      <AsyncSelect
        cacheOptions
        defaultOptions
        placeholder="Filter by type"
        styles={customStyles}
        loadOptions={loadTypeData}
        value={selectedData}
        onChange={(data) => {
          setSelectedData(data);
        }}
      />
    </div>
  );
};

export default App;
