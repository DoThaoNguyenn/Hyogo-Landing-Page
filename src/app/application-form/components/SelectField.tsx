import React from "react";
type SelectFieldProps = {
  label: string;
  options: (string | { value: string; label: string })[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectField = ({ label, options, onChange }: SelectFieldProps) => {
  return (
    <div>
      <label className="block text-xl font-semibold leading-tight text-blue-secondary mb-4">
        {label}
      </label>
      <select
        className="w-full py-2 px-4 border border-black rounded-[5px] focus:outline-none text-lg font-normal text-gray-placeholder"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "string" ? option : option.value}
          >
            {typeof option === "string" ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
