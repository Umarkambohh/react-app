import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Category = ({ reset, setReset }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Option:", selectedOption);
  };

  useEffect(() => {
    if (reset) {
      setSelectedOption("");
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <form onSubmit={formSubmit}>
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

      <div className="mt-5">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Category;
