"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { useRouter } from "next/navigation";
import { TextField } from "../application-form/components/TextField";
import { SelectField } from "../application-form/components/SelectField";
import { CheckBox } from "./components/CheckBox";
import HeaderForm from "@components/header/components/HeaderForm";
import Footer from "@components/footer/Footer";

const SCHOOLS = [
  "Trường Đại học Bách khoa – Đại học Quốc gia Thành phố HCM",
  "Trường Đại học Công nghiệp TP.HCM",
  "Trường Đại học Công nghệ Thông tin (ĐHQG TP.HCM)",
  "Trường Đại học Công Thương TP.HCM",
  "Trường Đại học Giao thông Vận tải TP.HCM",
  "Trường Đại học Kiến trúc TP.HCM",
  "Trường Đại học Kinh tế - Tài chính TP. Hồ Chí Minh",
  "Trường Đại học Khoa học Tự nhiên (ĐHQG TP.HCM)",
  "Trường Đại học Quốc tế Hồng Bàng",
  "Trường Đại học Sài Gòn",
  "Trường Đại học Sư Phạm Kỹ Thuật TP.HCM",
  "Trường Đại học Tôn Đức Thắng",
];

const GENDER = ["Nam", "Nữ"];
const YEARS = ["Năm 1", "Năm 2", "Năm 3", "Năm 4", "Đã tốt nghiệp"];

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

const REASONS = [
  { value: "Tôi quan tâm đến thị trường việc làm, công việc tại Nhật Bản." },
  { value: "Tôi quan tâm đến việc làm tại Tỉnh Hyogo, Nhật Bản." },
  { value: "Trường học và giảng viên khuyến khích tôi tham gia sự kiện." },
  {
    value:
      "Nhận tư vấn nghề nghiệp, CV, kỹ năng phỏng vấn, cuộc sống tại Nhật.",
  },
  {
    value:
      "Gặp gỡ, giao lưu, mở rộng mối quan hệ với doanh nghiệp, tiền bối trong ngành.",
  },
  { value: "Lí do khác (Vui lòng nêu rõ)" },
];

const page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      phone: "",
      email: "",
      school: "",
      year: "",
      participationType: "",
      selectedRooms: "",
      selectedReasons: [],
      otherReason: "",
      privacyAccepted: false,
    },
  });

  const onSubmit = (data: any) => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      console.log("Form submitted:", data);
      router.push("/success-form");
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <div className="container mx-auto flex flex-col justify-center items-center mt-9">
        {currentStep === 1 && (
          <>
            <p className="text-blue-secondary text-[32px] sm:text-[54px] font-bold text-center">
              Mẫu đăng ký
            </p>
            <p className="text-center text-black text-base sm:text-lg font-normal max-w-[68rem]">
              Thông tin bạn nhập bên dưới sẽ được công ty sử dụng cho quá trình
              tham gia sự kiện và liên lạc. Sinh viên sẽ được sắp xếp vào các
              phòng doanh nghiệp dựa trên mong muốn và độ phù hợp với từng lĩnh
              vực công ty. Vui lòng nhập đúng và đầy đủ thông tin.
            </p>
          </>
        )}
        <div className="mx-auto w-full lg:w-auto">
          <div className="p-6 sm:p-8 mt-5 md:mt-10 bg-white rounded-lg shadow">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 ? (
                <>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Vui lòng nhập họ và tên" }}
                    render={({ field }) => (
                      <TextField
                        label="Họ và Tên*"
                        type="text"
                        placeholder="Nguyễn Văn A"
                        error={errors.name?.message}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: "Vui lòng chọn giới tính" }}
                    render={({ field }) => (
                      <SelectField
                        label="Giới tính*"
                        options={GENDER}
                        error={errors.gender?.message}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Vui lòng nhập số điện thoại",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Số điện thoại chỉ được chứa số",
                      },
                      minLength: {
                        value: 10,
                        message: "Số điện thoại phải có ít nhất 10 số",
                      },
                      maxLength: {
                        value: 11,
                        message: "Số điện thoại không được quá 11 số",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        label="Số điện thoại*"
                        type="number"
                        placeholder="Nhập số điện thoại của bạn"
                        error={errors.phone?.message}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Địa chỉ email không hợp lệ",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        label="Email"
                        type="email"
                        placeholder="Nhập địa chỉ email của bạn"
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="school"
                    control={control}
                    rules={{ required: "Vui lòng chọn trường" }}
                    render={({ field }) => (
                      <SelectField
                        label="Bạn là sinh viên trường nào?*"
                        options={SCHOOLS}
                        error={errors.school?.message}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="year"
                    control={control}
                    rules={{ required: "Vui lòng chọn năm học" }}
                    render={({ field }) => (
                      <SelectField
                        label="Bạn là sinh viên năm mấy?*"
                        options={YEARS}
                        error={errors.year?.message}
                        {...field}
                      />
                    )}
                  />

                  <div>
                    <label className="block text-xl font-semibold leading-tight text-blue-secondary mb-1">
                      Bạn muốn tham gia sự kiện theo hình thức nào?*
                    </label>
                    <div className="flex flex-row gap-10">
                      <Controller
                        name="participationType"
                        control={control}
                        rules={{ required: "Vui lòng chọn hình thức tham gia" }}
                        render={({ field }) => (
                          <>
                            <CheckBox
                              value={"Online"}
                              title=""
                              onChange={(e) => {
                                if (e.target.checked) {
                                  field.onChange(
                                    field.value === "Online" ? "" : "Online"
                                  );
                                }
                              }}
                              checked={field.value === "Online"}
                            />
                            <CheckBox
                              value={"Offline"}
                              title=""
                              onChange={(e) => {
                                if (e.target.checked) {
                                  field.onChange(
                                    field.value === "Offline" ? "" : "Offline"
                                  );
                                }
                              }}
                              checked={field.value == "Offline"}
                            />
                          </>
                        )}
                      />
                    </div>
                    {errors.participationType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.participationType.message}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Controller
                    name="selectedRooms"
                    control={control}
                    rules={{ required: "Vui lòng chọn ít nhất một phòng" }}
                    render={({ field }) => (
                      <>
                        <CheckBox
                          value={"Room A"}
                          title="Chọn phòng doanh nghiệp bạn muốn tham gia*"
                          onChange={(e) => {
                            if (e.target.checked) {
                              field.onChange(
                                field.value === "Room A" ? "" : "Room A"
                              );
                            }
                          }}
                          checked={field.value === "Room A"}
                        />
                        <ul className="pl-8 space-y-2">
                          {RoomA.map((company) => (
                            <li
                              key={company.value}
                              className="text-base text-black-text ml-8"
                            >
                              - {company.value}
                            </li>
                          ))}
                        </ul>

                        <CheckBox
                          value={"Room B"}
                          title=""
                          onChange={(e) => {
                            if (e.target.checked) {
                              field.onChange(
                                field.value === "Room B" ? "" : "Room B"
                              );
                            }
                          }}
                          checked={field.value === "Room B"}
                        />
                        <ul className="pl-8 space-y-2">
                          {RoomB.map((company) => (
                            <li
                              key={company.value}
                              className="text-base text-black-text ml-8"
                            >
                              - {company.value}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  />

                  <div className="h-[0px] border border-[#e2e4e5] mt-3"></div>

                  <Controller
                    name="selectedReasons"
                    control={control}
                    rules={{ required: "Vui lòng chọn ít nhất một lý do" }}
                    render={({ field }) => (
                      <>
                        {REASONS.map((reason, index) => (
                          <CheckBox
                            key={reason.value}
                            title={
                              index === 0
                                ? "Tại sao bạn muốn tham gia sự kiện này? *"
                                : ""
                            }
                            value={reason.value}
                            onChange={(e) => {
                              const currentValue: string[] = field.value || [];
                              const newValue = e.target.checked
                                ? [...currentValue, reason.value]
                                : currentValue.filter(
                                    (v) => v !== reason.value
                                  );
                              field.onChange(newValue);
                            }}
                          />
                        ))}
                      </>
                    )}
                  />

                  <Controller
                    name="otherReason"
                    control={control}
                    render={({ field }) => (
                      <div className="flex w-full justify-center">
                        <textarea
                          className="w-[85%] h-[100px] border border-[#989898] rounded-lg p-2 placeholder:text-[#989898] placeholder:text-base placeholder:font-normal placeholder:leading-normal resize-none hover:border-blue-secondary focus:border-blue-secondary focus:outline-none"
                          placeholder="Vui lòng nhập câu trả lời của bạn"
                          {...field}
                        />
                      </div>
                    )}
                  />
                </>
              )}
            </form>
          </div>

          <p className="ml-8 mt-4 mb-2 text-blue-secondary text-lg font-semibold leading-tight">
            (*) Là thông tin bắt buộc
          </p>
          <div className="flex flex-col mx-0 sm:mx-20">
            {currentStep === 2 && (
              <div className="flex flex-row justify-between items-center mt-8">
                <Controller
                  name="privacyAccepted"
                  control={control}
                  rules={{
                    required: "Vui lòng đồng ý với điều khoản bảo mật",
                  }}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      className="appearance-none min-w-5 min-h-5 border-2 border-black ml-4 mr-3 cursor-pointer checked:bg-blue-secondary checked:border-blue-secondary relative before:content-['✓'] before:absolute before:hidden checked:before:block before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-white before:text-xl"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
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
                  <span className="text-black text-base font-medium leading-normal">
                    {" "}
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
            )}

            <div className="flex justify-between items-start mt-6 mx-4">
              {currentStep === 2 && (
                <button
                  onClick={handleBack}
                  className="mb-7 md:mb-[4rem] py-3 px-7 bg-white border border-[#029fc8] text-blue-secondary text-xl font-normal leading-tight rounded-[5px] flex items-center"
                >
                  <img
                    src="/images/icons/icon-back.svg"
                    alt="arrow-right"
                    className="mr-2"
                  />
                  Quay lại
                </button>
              )}
              <button
                onClick={handleSubmit(onSubmit)}
                className="mb-7 md:mb-[4rem] py-3 px-7 bg-blue-secondary text-white text-xl font-normal leading-tight rounded-[5px] flex items-center ml-auto"
              >
                {currentStep === 1 ? "Tiếp theo" : "Gửi"}
                <img
                  src="/images/icons/icon-next.svg"
                  alt="arrow-right"
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
