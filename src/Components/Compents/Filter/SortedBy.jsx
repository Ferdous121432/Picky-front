import React, { useEffect } from "react";

const options = ["option 1", "option 2", "option 3", "option 4"];

export default function SortedBy() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleCheckboxChange = (event) => {
    const selected = event.target.name;
    setSelectedOption(selectedOption === selected ? selected : selected);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      {/* TODO: DefaultChecked value is not working */}
      {options.map((option, index) => (
        <div key={index} className="my-2 flex items-center justify-start gap-2">
          <input
            className="hidden"
            type="checkbox"
            name={option}
            id={option}
            value={option}
            defaultChecked={selectedOption === option}
            checked={selectedOption === option}
            onChange={handleCheckboxChange}
          />
          <label
            className="flex items-center justify-start gap-2 capitalize"
            htmlFor={option}
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-solid border-slate-900 bg-slate-50 p-1">
              <span
                className={`inline-block h-full w-full rounded-full ${
                  selectedOption === option ? "bg-black" : "bg-white"
                }`}
              ></span>
            </div>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}
