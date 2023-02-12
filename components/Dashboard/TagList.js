import React, { useState } from 'react';
import Select from 'react-select';
import { TagsInput } from "react-tag-input-component";


function TagList() {
  const data = [
    {
      value: 1,
      label: "abc"
    },
    {
      value: 2,
      label: "def"
    },
    {
      value: 3,
      label: "ghi"
    },
    {
      value: 4,
      label: "lfh"
    },
    {
      value: 5,
      label: "rjij"
    },
    {
      value: 6,
      label: "ghjh"
    }
  ];

  // default selection for dropdown
  const [selectedValue, setSelectedValue] = useState([]);

  // handle dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  console.log(selectedValue);


  // default selection for tags
  const [selected, setSelected] = useState(selectedValue);   // Pass array map 

  console.log(selected, "selected tag values");


  return (
    <div className="App" style={{ background: '#000', color: '#fff' }}>

      {selected && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div>
          <TagsInput
            value={selectedValue}
            onChange={() => setSelected(true)}
            name="fruits"
            placeHolder="enter fruits"
            sx = {{backgroundColor :'transparent'}}
          />
          <b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
      </div>}
      
      <Select
        className="dropdown"
        placeholder="Select Option"
        value={data.filter(obj => selectedValue.includes(obj.value))}
        options={data}
        onChange={handleChange}
        isMulti
        isClearable
        sx={{ background: "#000" }}
      />


    </div>
  );
}

export default TagList;
