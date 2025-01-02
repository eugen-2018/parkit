// Registration page

import React from "react";
import { Metadata } from "next";
import RegisterMain from "@/pages/register/register-main"; // Import the registration UI component

// Define the metadata for this page
export const metadata: Metadata = {
  title: "Liko - Register page",
};

// RegisterPage component
const RegisterPage = () => {
  return (
    <RegisterMain/> // Renders the RegisterMain component
  );
};

export default RegisterPage; // Exports the RegisterPage component as the default export
