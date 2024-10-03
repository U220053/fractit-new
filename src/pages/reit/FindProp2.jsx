import { Link } from "react-router-dom";
import findProperties from "../../data/findProperties";

const FindProp2 = () => {
  return (
    <>
      {findProperties.slice(0, 4).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl" key={item.id}>
          <Link
            to="/listing-grid-v2"
            className="properti_city_home8 text-center d-block"
          >
            <div className="thumb">
              <img className="cover w-100 h-100" src={item.img} alt="pc1.jpg" />
            </div>

            <div className="details">
              {/* <h4>{item.name}</h4> */}
              <p>{item?.data} </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProp2;
