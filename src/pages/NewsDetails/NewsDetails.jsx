import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";

const NewsDetails = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
            Dragon News
          </h2>
          <div className="border p-7 rounded-md"></div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
