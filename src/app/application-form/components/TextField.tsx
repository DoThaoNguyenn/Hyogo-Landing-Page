import React from "react";
type TextFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
};
export const TextField = ({
  label,
  type = "text",
  placeholder,
  onChange,
  value,
  error,
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
        value={value}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
