'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";

export default function FullWidthContactForm() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://appy.trycatchtech.com/v3/maganlalchikki/about"
      );

      setData(response.data[0]);
    };

    fetchData();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name too short")
      .max(50, "Name too long")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    message: Yup.string()
      .min(10, "Message too short")
      .max(500, "Message too long")
      .required("Message is required"),
  });

  const initialValues = { name: "", email: "", message: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {/* Banner */}
            
                     <PageBanner
                    title="Contact Us"
                    image={data.image}
                  />
            
          
      {/* Form */}
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Contact Us
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>

              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>

              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>

              <Field
                as="textarea"
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition"
            >
              Submit
            </button>

          </Form>
        </Formik>

        
      </div>
      <div className="max-w mt-10 text-[#666]">
<div>
  {/* Left Side - Address */}
 <div className="flex items-center w-full mb-4">
  <h2 className="text-xl font-semibold whitespace-nowrap mr-4">
    Address
  </h2>

  <div className="flex-grow border-t border-gray-600"></div>
</div>

   <p className="font-bold">Maganlal Chikki Products Pvt Ltd</p>

    <p>
    Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401 Dist. Pune
Online store:- www.maganlalchikki.in
    </p>

    <p>
        Ph. No. :- +912114274060 I Mobile No. :- +917666530969
    </p>

    <p>
   Contact Time :- 9 AM To 6 PM
    </p>

    <p>
       Factory Closed - Thursday
    </p>

    <p>
     
      sales@maganlalchikki.in
    </p>

  </div>


</div>



   <div className="mt-6 w-full">

  <iframe
    src="https://www.google.com/maps?q=Maganlal+Chikki+Products+Pvt+Ltd+Lonavala&output=embed"
    className="w-full h-[350px] md:h-[400px] border-0"
    loading="lazy"
  ></iframe>

</div>
    </>
  );
}