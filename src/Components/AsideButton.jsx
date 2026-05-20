import { NavLink } from "react-router";

const AsideButton = ({ btnName, link, icon }) => {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `hidden w-full text-slate-50 hover:bg-sky-500 hover:text-sky-200 transition-all px-5 py-4 text-left font-semibold font-['sora'] rounded-2xl mb-3 lg:block ${isActive ? "bg-sky-500" : ""} `
        }
      >
        {btnName}
      </NavLink>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `lg:hidden hover:text-sky-200 transition-all  text-center font-semibold font-['sora'] ${isActive ? "text-sky-500" : "text-slate-50"} `
        }
      >
        {icon} <br />
        {btnName}
      </NavLink>{" "}
    </>
  );
};

export default AsideButton;
