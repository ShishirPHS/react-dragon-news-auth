import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 mb-8">
      <img src={logo} alt="Logo" />
      <h3 className="text-lg text-[#706F6F] mt-5">
        Journalism Without Fear or Favour
      </h3>
      <p className="mt-3 text-[#706F6F] text-xl font-medium">
        <span className="text-[#403F3F]">{moment().format("dddd,")} </span>
        {moment().format("MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
