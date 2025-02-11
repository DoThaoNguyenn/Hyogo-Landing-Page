import React from "react";
type SelectFieldProps = {
  label: string;
  options: (string | { value: string; label: string })[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  error?: string;
  defaultValue?: string;
};

export const SelectField = ({
  label,
  options,
  onChange,
  value,
  error,
  defaultValue,
}: SelectFieldProps) => {
  return (
    <div>
      <label className="block text-xl font-semibold leading-tight text-blue-secondary mb-4">
        {label}
      </label>
      <select
        className="w-full py-2 px-4 border border-black rounded-[5px] focus:outline-none text-lg font-normal text-gray-placeholder appearance-none bg-[url('/images/icons/dropdownIcon.png')] bg-no-repeat bg-[center_right_8px]"
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
