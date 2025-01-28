import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <div className=''>
      <Link
        to='/'
        className={`text-2xl font-semibold dark:text-white ${
          type && "text-white  text-4xl"
        }`}
      >
        Intelli
        {/* <span
          className={`text-3xl text-rose-500 ${type && " text-5xl font-bold"}`}
        >
          Sense
        </span> */}
        <span className={`text-3xl ${type ? "text-5xl font-bold" : ""}`} style={{ color: "#5D3587" }}>
          Sense
        </span>
      </Link>
    </div>
  );
};

export default Logo;
