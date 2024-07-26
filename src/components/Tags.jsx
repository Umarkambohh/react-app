import { Select } from "@chakra-ui/react";
import { useState } from "react";

const Tags = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      value: "option1",
      label: "option1",
    },
    {
      value: "option2",
      label: "option2",
    },
    {
      value: "option3",
      label: "option3",
    },
  ];

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
  };

  const formRest = () => {
    setSelectedOption('');
  };

  return (
    <>
      <form onClick={formSubmit}>
        <Select
          placeholder="Select option"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

        <button className="mt-5 btn btn-primary" type="submit">
          sumbit
        </button>

        <button className="btn btn-danger" onClick={formRest}>reset</button>
      </form>
    </>
  );
};

export default Tags;
