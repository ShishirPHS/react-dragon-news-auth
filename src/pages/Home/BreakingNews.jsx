import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 flex mb-5">
      <button className="text-xl font-medium text-white py-2 px-6 bg-[#D72050]">
        Latest
      </button>
      <Marquee pauseOnHover={true}>
        <Link className="mr-14" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-14" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-14" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-14" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
