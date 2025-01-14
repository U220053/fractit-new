// import { useState } from "react";

// const PropertyDescriptions = ({ property }) => {
//   const [click, setClick] = useState(true);
//   const handleClick = () => setClick(!click);
//   if (!property || !property.description || property.description.length < 3) {
//     return <p>No description available</p>;
//   }
//   console.log("nitu1", property.description[0].text);
//   console.log("nitu2", property.description[1].text);
//   console.log("nitu3", property.description[2].text);
//   return (
//     <>
//       <p className="mb25">{property.description[0].text}</p>
//       <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
//         {property.description[1].text}
//       </p>
//       <div className="collapse" id="collapseExample">
//         <div className="card card-body">
//           <p className="mt10 mb10">{property.description[2].text}</p>
//           <p className="mt10 mb10">{property.description[3].text}</p>
//         </div>
//       </div>
//       <p className="overlay_close">
//         <a
//           className="text-thm fz14"
//           data-bs-toggle="collapse"
//           href="#collapseExample"
//           role="button"
//           aria-expanded="false"
//           aria-controls="collapseExample"
//           onClick={handleClick}
//         >
//           Show More <span className="flaticon-download-1 fz12"></span>
//         </a>
//       </p>
//     </>
//   );
// };

// export default PropertyDescriptions;
import { useState } from "react";

const PropertyDescriptions = ({ property }) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  // Safely check if property and description exist and have enough elements
  const hasDescription = property?.description?.length >= 3;

  return (
    <>
      {hasDescription ? (
        <>
          <p className="mb25">
            {property.description[0]?.text || "No description available"}
          </p>
          <p
            className={
              click ? "gpara second_para white_goverlay mt10 mb10" : ""
            }
          >
            {property.description[1]?.text ||
              "No additional description available"}
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <p className="mt10 mb10">
                {property.description[2]?.text || "No description available"}
              </p>
              {/* Check if a 4th description exists */}
              {property.description[3] && (
                <p className="mt10 mb10">{property.description[3]?.text}</p>
              )}
            </div>
          </div>
          <p className="overlay_close">
            <a
              className="text-thm fz14"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={handleClick}
            >
              Show More <span className="flaticon-download-1 fz12"></span>
            </a>
          </p>
        </>
      ) : (
        <p>No description data available</p>
      )}
    </>
  );
};

export default PropertyDescriptions;
