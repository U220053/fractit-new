const PropertyFeatures = ({ property }) => {
  // No need to wrap property.propertyFeatures in an additional array
  const propertyFeatures = property?.propertyFeatures || [];

  return (
    <>
      {propertyFeatures.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            {item.list.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
