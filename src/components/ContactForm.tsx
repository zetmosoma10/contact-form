import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FormDataType, schema } from "../schema";
import Toastify from "./Toastify";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      queryType: "",
    },
  });

  const selectedQueryType = watch("queryType");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white md:w-[736px] mx-auto p-6 md:p-10 rounded-2xl text-darkGrey m-28"
      >
        {isSubmitSuccessful && showToast && (
          <div className="absolute top-[-110px] left-0 right-0 mx-auto">
            <Toastify />
          </div>
        )}
        <h1 className="font-bold text-3xl tracking-[-1px] mb-8">Contact Us</h1>
        <div className="md:grid md:grid-cols-2 md:grid- md:space-x-4">
          <div className="mb-6">
            <label className="custome-label" htmlFor="firstName" id="firstName">
              First Name
            </label>
            <input
              {...register("firstName")}
              className={`border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green ${
                errors.firstName && "border-redError"
              }`}
              type="text"
              id="firstName"
            />
            {errors.firstName && (
              <small className="text-redError">
                {errors.firstName.message}
              </small>
            )}
          </div>
          <div className="mb-6">
            <label className="custome-label" htmlFor="lastName" id="lastName">
              Last Name
            </label>
            <input
              {...register("lastName")}
              className={`border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green ${
                errors.lastName && "border-redError"
              }`}
              type="text"
              id="lastName"
            />
            {errors.lastName && (
              <small className="text-redError">{errors.lastName.message}</small>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="custome-label" htmlFor="email" id="email">
            Email Address
          </label>
          <input
            {...register("email")}
            className={`border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green ${
              errors.email && "border-redError"
            }`}
            type="email"
            id="email"
          />
          {errors.email && (
            <small className="text-redError">{errors.email.message}</small>
          )}
        </div>
        <div className="mb-6">
          <label className="custome-label">Query Types</label>
          <div className="md:flex md:items-center md:justify-between md:space-x-4">
            <label
              className={`${
                selectedQueryType === "enquity" && "bg-lightGreen border-green"
              } custome-label flex items-center py-3 px-6 space-x-3 text-nowrap  border border-mediumGrey rounded-lg md:w-full`}
              htmlFor="enquity"
            >
              <input
                {...register("queryType")}
                className="border border-mediumGrey"
                type="radio"
                id="enquity"
                value="enquity"
              />
              <span>General Enquity</span>
            </label>
            <label
              className={`${
                selectedQueryType === "support" && "bg-lightGreen border-green"
              } custome-label flex items-center py-3 px-6 space-x-3 text-nowrap  border border-mediumGrey rounded-lg md:w-full`}
              htmlFor="support"
            >
              <input
                {...register("queryType")}
                className="border border-mediumGrey"
                type="radio"
                id="support"
                value="support"
              />
              <span>Support Request</span>
            </label>
          </div>
          {errors.queryType && (
            <small className="text-redError">{errors.queryType.message}</small>
          )}
        </div>
        <div className="mb-6">
          <label className="custome-label" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            className={`border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green ${
              errors.message && "border-redError"
            }`}
            id="message"
          ></textarea>
          {errors.message && (
            <small className="text-redError">{errors.message.message}</small>
          )}
        </div>
        <div className="mb-6 ">
          <input {...register("checkbox")} type="checkbox" id="checkbox" />
          <label
            className="text-base text-darkGreen mt-4 mb-2 ml-3"
            htmlFor="checkbox"
          >
            I consent to being contacted by the team *
          </label>
          {errors.checkbox && (
            <small className="text-redError block">
              {errors.checkbox.message}
            </small>
          )}
        </div>
        <button
          className="text-lg font-bold text-white leading-[150%] bg-green rounded-lg py-4 w-full
        hover:bg-opacity-70"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
