import { FieldValues, useForm } from "react-hook-form";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  message: String;
  queryType: boolean;
  checkbox: boolean;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white mx-w-[736px] mx-auto p-6 md:p-10 rounded-2xl text-darkGrey m-20"
    >
      <h1 className="font-bold text-3xl tracking-[-1px] mb-8">Contact Us</h1>
      <div className="md:flex md:items-center md:space-x-4">
        <div className="mb-6">
          <label className="custome-label" htmlFor="firstName" id="firstName">
            First Name
          </label>
          <input
            {...register("firstName")}
            className="border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green"
            type="text"
            id="firstName"
          />
        </div>
        <div className="mb-6">
          <label className="custome-label" htmlFor="lastName" id="lastName">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green"
            type="text"
            id="lastName"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="custome-label" htmlFor="email" id="email">
          Email Address
        </label>
        <input
          {...register("email")}
          className="border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green"
          type="email"
          id="email"
        />
      </div>
      <div className="mb-6">
        <label className="custome-label" htmlFor="">
          Query Types
        </label>
        <div className="md:flex md:items-center md:justify-between md:space-x-4">
          <label
            className="custome-label flex items-center py-3 px-6 space-x-3 text-nowrap  border border-mediumGrey rounded-lg md:w-full"
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
            className="custome-label flex items-center py-3 px-6 space-x-3 text-nowrap  border border-mediumGrey rounded-lg md:w-full"
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
      </div>
      <div className="mb-6">
        <label className="custome-label" htmlFor="message">
          Message
        </label>
        <textarea
          {...register("message")}
          className="border border-mediumGrey w-full p-6 py-3 rounded-lg outline-none focus:border-green"
          id="message"
        ></textarea>
      </div>
      <div className="mb-6 space-x-4">
        <input {...register("checkbox")} type="checkbox" id="checkbox" />
        <label className="text-base text-darkGreen " htmlFor="checkbox">
          I consent to being contacted by the team *
        </label>
      </div>
      <button
        className="text-lg font-bold text-white leading-[150%] bg-green rounded-lg py-4 w-full
        hover:bg-opacity-70"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
