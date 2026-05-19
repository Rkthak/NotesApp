import { NavLink } from "react-router";

const AsideButton = ({ btnName, link }) => {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `w-full text-slate-50 hover:bg-sky-500 hover:text-sky-200 transition-all px-5 py-4 text-left font-semibold font-['sora'] rounded-2xl mb-3 block ${isActive ? "bg-sky-500" : ""} `
        }
      >
        {btnName}
      </NavLink>
    </>
  );
};

export default AsideButton;
