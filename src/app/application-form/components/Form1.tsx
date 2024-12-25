"use client";
import React, { useState } from "react";
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";
import { useRouter } from "next/navigation";

const SCHOOLS = [
  "Trường Đại học Bách Khoa - ĐHQG TP.HCM",
  "Trường Đại học Khoa học Tự nhiên - ĐHQG TP.HCM",
];
const YEARS = ["Năm 3", "Năm 4"];
const Form1 = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    school: "Trường Đại học Bách Khoa - ĐHQG TP.HCM",
    year: "Năm 3",
    participationType: [] as string[],
    reason: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleParticipationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const newTypes = e.target.checked
      ? [...formData.participationType, type]
      : formData.participationType.filter((t) => t !== type);
    setFormData({ ...formData, participationType: newTypes });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mx-auto ">
      <div className="p-8 mt-10 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Họ và Tên*"
            placeholder="Nguyễn Văn A"
            onChange={handleChange("name")}
          />

          <TextField
            label="Số điện thoại*"
            type="tel"
            placeholder="Nhập số điện thoại của bạn"
            onChange={handleChange("phone")}
          />

          <TextField
            label="Email"
            type="email"
            placeholder="Nhập địa chỉ email của bạn"
            onChange={handleChange("email")}
          />

          <SelectField
            label="Bạn là sinh viên trường nào?*"
            options={SCHOOLS}
            onChange={handleChange("school")}
          />

          <SelectField
            label="Bạn là sinh viên năm mấy?*"
            options={YEARS}
            onChange={handleChange("year")}
          />

          <div>
            <label className="block text-xl font-semibold leading-tight text-blue-secondary mb-1">
              Bạn muốn tham gia sự kiện theo hình thức nào?*
            </label>
            <div className="space-x-10 px-4 py-2">
              {["Online", "Offline"].map((type) => (
                <label
                  key={type}
                  className="inline-flex items-center text-xl font-normal text-black-checkbox"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray rounded "
                    value={type}
                    onChange={(e) => handleParticipationChange(e, type)}
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <SelectField
            label="Tại sao bạn muốn tham gia sự kiện này?"
            options={["Chọn câu trả lời phù hợp"]}
            onChange={handleChange("reason")}
          />
        </form>
      </div>
      <div className="flex justify-end">
        <button
          className="mt-[1.625rem] mb-[4rem] py-3 px-7 bg-blue-secondary text-white text-xl font-semibold leading-tight rounded-[5px] flex items-center justify-center"
          onClick={() => router.push("/application-form-2")}
        >
          Tiếp theo
          <img
            src="/images/icons/icon-next.svg"
            alt="arrow-right"
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Form1;
