import React from "react";

type CheckboxGroupProps = {
  title: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, option: any) => void;
};

export const CheckboxGroup = ({
  title,
  options,
  onChange,
}: CheckboxGroupProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-xl text-blue-secondary">{title}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center text-lg font-normal text-black-text"
          >
            <input
              type="checkbox"
              className="min-w-[20px] min-h-[20px] border-2 border-black ml-4 mr-3 appearance-none cursor-pointer 
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
              value={option.value || option.name}
              onChange={(e) => onChange(e, option)}
            />
            <span>
              {option.name} {option.type}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
