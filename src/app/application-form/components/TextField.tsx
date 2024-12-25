import React from "react";
type TextFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextField = ({
  label,
  type = "text",
  placeholder,
  onChange,
}: TextFieldProps) => {
  return (
    <div>
      <label className="block text-xl font-semibold leading-tight text-blue-secondary mb-1">
        {label}
      </label>
      <input
        type={type}
        className="w-full py-2 px-4 border-b border-gray focus:outline-none placeholder:text-gray-placeholder placeholder:text-lg placeholder:font-normal"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
