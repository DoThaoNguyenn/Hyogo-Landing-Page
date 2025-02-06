"use client";
import React, { useState } from "react";
import { CheckboxGroup } from "./CheckboxGroup";
import { useRouter } from "next/navigation";
import CheckBoxGroup from "./CheckBox";
const COMPANIES = [
  { name: "Aspark Co., Ltd", type: "(Sản xuất)" },
  { name: "CBS Group", type: "(Xây dựng)" },
  { name: "Fuji Data System Inc.", type: "(Công nghệ thông tin)" },
  { name: "FUJI SPRINGS CO.,INC.", type: "(Sản xuất)" },
  { name: "HYOGO MACHINERY CO.,LTD", type: "(Sản xuất)" },
  { name: "ITOH DENKI", type: "(Sản xuất)" },
  { name: "Kako Technos Co., Ltd", type: "(Sản xuất)" },
  { name: "Okada Shell Co., Ltd.", type: "(Sản xuất)" },
  { name: "Pasona Inc.", type: "(Nhân sự)" },
  { name: "Petabit Corporation", type: "(Công nghệ thông tin)" },
  { name: "Sankyu Inc.", type: "(Xây dựng)" },
];
const REASONS = [
  { name: "Tôi quan tâm đến thị trường việc làm, công việc tại Nhật  Bản." },
  { name: "Tôi quan tâm đến việc làm tại Tỉnh Hyogo, Nhật Bản." },
  { name: "Trường học và giảng viên khuyến khích tôi tham gia sự kiện." },
  {
    name: "Nhận tư vấn nghề nghiệp, CV, kỹ năng phỏng vấn, cuộc sống tại Nhật.",
  },
  {
    name: "Gặp gỡ, giao lưu, mở rộng mối quan hệ với doanh nghiệp, tiền bối trong ngành.",
  },
  { name: "Lí do khác (Vui lòng nêu rõ)" },
];
const RoomA = [
  { value: "Aspark Co., Ltd." },
  { value: "Fuji Data System Inc." },
  { value: "FUJI SPRINGS CO., Inc" },
  { value: "Petabit Corporation" },
  { value: "Kako Technos Co., Ltd." },
  { value: "ITOH DENKI" },
];
const RoomB = [
  { value: "CBS Group" },
  { value: "Hyogo Machinery Co., Ltd" },
  { value: "Okada Shell Co., Ltd." },
  { value: "Sankyu Inc." },
  { value: "Pasona Inc." },
];
const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    primaryCompanies: [],
    secondaryCompanies: [],
  });

  const handleCompanySelection =
    (isPrimary: boolean) =>
    (e: React.ChangeEvent<HTMLInputElement>, company: { name: string }) => {
      const field = isPrimary ? "primaryCompanies" : "secondaryCompanies";
      const companies = e.target.checked
        ? [...formData[field], company]
        : formData[field].filter(
            (c: { name: string }) => c.name !== company.name
          );
      setFormData({ ...formData, [field]: companies });
    };

  return (
    <div className="mx-auto flex flex-col max-w-[770px] ">
      <div className="p-8 mt-[4.5rem] bg-white rounded-lg shadow flex flex-col gap-8 w-full lg:w-fit">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <CheckBoxGroup options={["Room A"]} />
            <ul className="list-disc pl-8 space-y-2">
              {RoomA.map((company) => (
                <li
                  key={company.value}
                  className="text-base text-black-text ml-8"
                >
                  {company.value}
                </li>
              ))}
            </ul>
          </div>
          <CheckBoxGroup options={["Room B"]} />
          <ul className="list-disc pl-8 space-y-2">
            {RoomB.map((company) => (
              <li
                key={company.value}
                className="text-base text-black-text ml-8"
              >
                {company.value}
              </li>
            ))}
          </ul>
          <div className="h-[0px] border border-[#e2e4e5] mt-3"></div>
        </div>
        <CheckboxGroup
          title="Tại sao bạn muốn tham gia sự kiện này? *"
          options={REASONS}
          onChange={handleCompanySelection(false)}
        />
        <div className="flex w-full justify-center">
          <textarea
            className="w-[85%] h-[100px] border border-[#989898] rounded-lg p-2 placeholder:text-[#989898] placeholder:text-base placeholder:font-normal placeholder:leading-normal resize-none hover:border-blue-secondary focus:border-blue-secondary focus:outline-none"
            placeholder="Vui lòng nhập câu trả lời của bạn"
          ></textarea>
        </div>
      </div>
      <p className="ml-8 mt-4 mb-2 text-blue-secondary text-lg font-semibold leading-tight">
        (*) Là thông tin bắt buộc
      </p>
      <div className="flex flex-col mx-20">
        <div className="flex flex-row justify-between items-center mt-8">
          <input
            type="checkbox"
            className="
          appearance-none
          w-7 h-5 
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
          />

          <div className="">
            <span className="text-black text-base font-medium leading-normal">
              Tôi đã đọc và đồng ý với{" "}
            </span>
            <a
              className="text-[#029fc8] text-base font-medium underline leading-normal"
              href="https://pasona.vn/privacy-policy"
              target="_blank"
            >
              Chính sách bảo mật
            </a>
            <span className="text-black text-base font-medium underline leading-normal">
              {" "}
            </span>
            <span className="text-black text-base font-medium leading-normal">
              và{" "}
            </span>
            <a
              href="https://vanban.chinhphu.vn/?pageid=27160&docid=207759"
              target="_blank"
              className="text-[#029fc8] text-base font-medium underline leading-normal"
            >
              Nghị định 13/2023{" "}
            </a>
            <span className="text-black text-base font-medium leading-normal">
              về việc thu thập và xử lý dữ liệu của Pasona.
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <button
            className="mt-[1.625rem] mb-[4rem] py-2 px-7 bg-white border border-[#029fc8] text-blue-secondary text-xl font-normal leading-tight rounded-[5px] flex items-center justify-center"
            onClick={() => router.push("/application-form")}
          >
            <img
              src="/images/icons/icon-back.svg"
              alt="arrow-right"
              className="ml-2"
            />
            Quay lại
          </button>
          <button
            className="mt-[1.625rem] mb-[4rem] py-2 px-7 bg-blue-secondary text-white text-xl font-normal leading-tight rounded-[5px] flex items-center justify-center"
            onClick={() => router.push("/success-form")}
          >
            Gửi
            <img
              src="/images/icons/icon-next.svg"
              alt="arrow-right"
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
