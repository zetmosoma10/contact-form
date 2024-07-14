import iconSuccess from "../assets/icon-success-check.svg";

const Toastify = () => {
  return (
    <div className="bg-darkGrey text-white p-6  rounded-xl">
      <header className="flex items-center space-x-2">
        <img src={iconSuccess} alt="" />
        <p className="text-lg font-bold">Message Sent!</p>
      </header>
      <p className="text-base">
        Thanks for completing the form. We’ll be in touch soon!
      </p>
    </div>
  );
};

export default Toastify;
