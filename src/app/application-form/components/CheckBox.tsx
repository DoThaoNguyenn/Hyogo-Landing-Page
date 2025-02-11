import React from "react";

type CheckBoxProps = {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, option: any) => void;
  checked?: boolean;
};

export const CheckBox = ({
  title,
  value,
  onChange,
  checked,
}: CheckBoxProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-xl text-blue-secondary">{title}</h3>
      <div className="space-y-3">
        <label className="flex items-center text-lg font-normal text-black-text">
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
            value={value}
            onChange={(e) => onChange(e, value)}
            checked={checked}
          />
          <span>{value}</span>
        </label>
      </div>
    </div>
  );
};
