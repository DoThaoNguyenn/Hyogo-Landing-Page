import { useState } from "react";

interface CheckBoxProps {
  options: string[];
  onChange?: (selectedValues: string[]) => void;
  initialValues?: string[];
}

export const CheckBox = ({
  options,
  onChange,
  initialValues = [],
}: CheckBoxProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    let newValues: string[];
    if (e.target.checked) {
      newValues = [...selectedValues, value];
    } else {
      newValues = selectedValues.filter((item) => item !== value);
    }
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  return (
    <div className="space-x-10 px-4 py-2">
      {options.map((option) => (
        <label
          key={option}
          className="inline-flex items-center text-xl font-normal text-black-checkbox"
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option)}
            className="
              appearance-none
              w-5 h-5 
              border-2 border-black 
              ml-4 mr-3
              cursor-pointer 
              checked:bg-blue-secondary
              checked:border-blue-secondary
              relative
              before:content-['✓']
              before:absolute
              before:hidden
              checked:before:block
              before:top-1/2
              before:left-1/2
              before:-translate-x-1/2
              before:-translate-y-1/2
              before:text-white
              before:text-xl
            "
            value={option}
            onChange={(e) => handleChange(e, option)}
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
