import {
  AiFillGithub,
  AiOutlineGoogle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="mb-7">
        <h3 className="text-[#1F232C] text-xl font-bold mb-8">Login With</h3>
        <button className="text-xl btn w-full bg-transparent normal-case text-[#456699] border-[#456699] mb-4">
          <AiOutlineGoogle></AiOutlineGoogle>
          Login with Google
        </button>
        <button className="text-xl btn w-full bg-transparent normal-case text-[#242424] border-[#242424] mb-4">
          <AiFillGithub></AiFillGithub>
          Login with Github
        </button>
      </div>
      <div>
        <h3 className="text-[#403F3F] text-xl font-semibold mb-5">
          Find Us On
        </h3>
        <div className="mb-5">
          <button className="flex items-center justify-start p-4 w-full bg-transparent normal-case text-[#242424] border rounded-t-lg">
            <BsFacebook className="text-xl mr-3"></BsFacebook>
            Facebook
          </button>
          <button className="flex items-center justify-start p-4 w-full bg-transparent normal-case text-[#242424] border-x">
            <AiFillTwitterCircle className="text-xl mr-3"></AiFillTwitterCircle>
            Twitter
          </button>
          <button className="flex items-center justify-start p-4 w-full bg-transparent normal-case text-[#242424] border rounded-b-lg">
            <BiLogoInstagramAlt className="text-xl mr-3"></BiLogoInstagramAlt>
            Instagram
          </button>
        </div>
      </div>
      <div className="py-4 px-1 bg-[#F3F3F3] mb-5">
        <h3 className="px-4 text-[#403F3F] text-xl font-semibold mb-5">
          Q-Zone
        </h3>
        <div className="space-y-5">
          <img src={qZone1} alt="swimming a little girl" />
          <img src={qZone2} alt="children in a class" />
          <img src={qZone3} alt="children in a play ground" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
