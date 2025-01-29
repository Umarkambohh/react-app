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
      
    </>
  );
};

export default Tags;
