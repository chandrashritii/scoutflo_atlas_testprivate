import React, { useState } from 'react';
import Select from 'react-select';
import { TagsInput } from "react-tag-input-component";

function FilterTab() {
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

    const initialItems =[
        { id: 0, name: 'A', },
        { id: 1, name: 'B', },
        { id: 2, name: 'C' },
    
    ];

    //array will be formulated from selected list values

    const [items, setItems] = useState(initialItems);


    // default selection for dropdown

    // MULTIPLE STATES COMBINE - RISHABH
    const [selectedValue, setSelectedValue] = useState([
        // first: "",
        // second: "",
        // third: "",
        // fourth: "",
        // fifth: "",
        // sixth: ""

        
    ]);

    // handle dropdown
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    console.log(selectedValue);


    // default selection for tags
    const [selected, setSelected] = useState(selectedValue);   // Pass array map 

    console.log(selected, "selected tag values");

    return (
        <div className="App">

            {selected && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <div>
                    {/* Multiple tag inputs -> All selected values are mapped -> The map should be passed as state value */}

                    <TagsInput
                        value={selectedValue}
                        onChange={() => setSelected(true)}
                        name="fruits"
                        placeHolder="enter fruits"
                        sx={{ backgroundColor: "transparent", width: "0px" }}
                    />
                    </div>
            </div>}



            <Select
                className="dropdown"
                placeholder="By Category"
                value={data.filter(obj => selectedValue.includes(obj.value))}
                options={data}
                onChange={handleChange}
                isMulti
                isClearable
                sx={{ backgroundColor: "transparent", color: "#fff" }}
            />

                <selected
                
                />


        </div>
    );
}

export default FilterTab;
