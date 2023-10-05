import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { _id, title, image_url, details } = singleNews;

  return (
    <div className="border rounded-md">
      <div className="card">
        <h2 className="card-title px-5 pt-4 pb-5">{title}</h2>
        <img src={image_url} alt="Shoes" />
        <div className="card-body">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link className="text-blue-700 font-bold" to={`/news/${_id}`}>
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object.isRequired,
};

export default NewsCard;
