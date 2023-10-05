import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
        All Category
      </h2>
      <div>
        <ul className="leftSideNavUl text-center">
          {data.map((category) => (
            <li
              className="text-[#9F9F9F] text-xl font-medium"
              key={category.id}
            >
              <NavLink
                to={`/category/${category.id}`}
                className="block h-full py-4 rounded-md"
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNav;
