import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <h3 className="text-lg text-[#706F6F] mt-5">
        Journalism Without Fear or Favour
      </h3>
      <p className="mt-3 text-[#706F6F] text-xl font-medium">
        Sunday, November 27, 2022
      </p>
    </div>
  );
};

export default Header;
