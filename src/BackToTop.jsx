import { Link } from "react-router-dom";

const BackToTop = () => {
  return (
    <>
      <hr />
      <div className="new__customer">
        <p>See personalized recommendations</p>
        <Link to="/login">
          <button>Sign in</button>
        </Link>
        <div>
          <span className="to__login__page">
            New customer?
            <Link to="/login"> Start here.</Link>
          </span>
        </div>
      </div>
      <div className="footer">
        <a href="#">
          <button className="back__toTop">Back to top</button>
        </a>
        <div className="conditions">
          Conditions of Use | Privacy Notice | Interest-Based Ads | © 1996-2022,
          Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </>
  );
};

export default BackToTop;
