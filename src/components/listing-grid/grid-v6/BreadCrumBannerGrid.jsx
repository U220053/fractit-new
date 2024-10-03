import BreadCrumb from "../../common/BreadCrumb";

const BreadCrumBannerGrid = () => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              {/* <BreadCrumb title="about us" /> */}
              <h4 className="breadcrumb_title">Home</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumBannerGrid;