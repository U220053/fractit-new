import { Link, useLocation } from "react-router-dom";
// import ConnectWalletButton from "./ConnectWallet";

const HeaderMenuContent = ({ float = "" }) => {
  const { pathname } = useLocation();

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/#",
    },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },
        {
          name: "Grid v2",
          routerPath: "/listing-grid-v2",
        },
      ],
    },
  ];

  const property = [
    {
      id: 1,
      title: "User Admin",
      items: [
        {
          name: "Dashboard",
          routerPath: "/my-dashboard",
        },
        {
          name: "My Properties",
          routerPath: "/my-properties",
        },
      ],
    },
    {
      id: 2,
      title: "Listing Single",
      items: [
        {
          name: "Single V1",
          routerPath: "/listing-details-v1", // Dynamic paths with IDs will be compared
        },
        {
          name: "Single V2",
          routerPath: "/listing-details-v2",
        },
      ],
    },
  ];

  const pages = [{ id: 1, name: "About Us", routerPath: "/about-us" }];

  const blog = [{ id: 1, name: "Blog List 1", routerPath: "/blog-list-1" }];

  // Helper function to match paths even if there's an id
  const isActivePath = (routerPath) => {
    const pathWithoutId = pathname.split("/")[1]; // Extract the base path from current pathname
    const baseRoute = routerPath.split("/")[1]; // Extract the base route to compare
    return pathWithoutId === baseRoute;
  };

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      {/* <li className="dropitem">
        <a
          href="#"
          className={isActivePath(home[0].routerPath) ? "ui-active" : undefined}
        >
          <span className="title">Home</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {home.map((item) => (
            <li key={item.id}>
              <Link
                to={item.routerPath}
                className={
                  isActivePath(item.routerPath) ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

      <li className="last">
        <Link
          to="/#"
          // className={pathname === "/reit" ? "ui-active" : undefined}
        >
          Home
        </Link>
      </li>
      {/* <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) =>
              parent.items.some((item) => isActivePath(item.routerPath))
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Property</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((val) => isActivePath(val.routerPath))
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              <ul className="sub-menu">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      to={val.routerPath}
                      className={
                        isActivePath(val.routerPath) ? "ui-active" : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>

      <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((item) => isActivePath(item.routerPath))
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {pages.map((item) => (
            <li key={item.id}>
              <Link
                to={item.routerPath}
                className={
                  isActivePath(item.routerPath) ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            blog.some((item) => isActivePath(item.routerPath))
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {blog.map((item) => (
            <li key={item.id}>
              <Link
                to={item.routerPath}
                className={
                  isActivePath(item.routerPath) ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

      <li className="last">
        <Link
          to="/reit"
          className={pathname === "/reit" ? "ui-active" : undefined}
        >
          REIT
        </Link>
      </li>

      <li className={`list-inline-item list_s ${float}`}>
        <Link to="/coming-soon">
          <span className="dn-lg">Account</span>
        </Link>
      </li>

      <li className={`list-inline-item add_listing ${float}`}>
        {/* <Link to="/coming-soon">
          <span className="flaticon-plus"></span>
          <span className="dn-lg"> Connect Wallet</span>
        </Link> */}
        {/* <ConnectWalletButton float={float} /> */}
      </li>
    </ul>
  );
};

export default HeaderMenuContent;
