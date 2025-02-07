"use client";
import HeaderForm from "@components/header/components/HeaderForm";
import React from "react";
import Form2 from "./components/Form2";
import Footer from "@components/footer/Footer";

const page = () => {
  return (
    <div
      className="bg-repeat "
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <div className="container mx-auto flex flex-col justify-center items-center mt-9">
        <Form2 />
      </div>
      <Footer />
    </div>
  );
};

export default page;
