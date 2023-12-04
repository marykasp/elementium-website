const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-secondary rounded-md font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:bg-blue-100 transition-all`}
    >
      Get Started
    </button>
  );
};

export default Button;
