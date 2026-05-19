import { Outlet } from "react-router";
import Aside from "../Components/Aside";
import BackGround from "../Components/BackGround";
const MainLayout = () => {
  return (
    <>
      <BackGround>
        <Aside />
        <Outlet />
      </BackGround>
    </>
  );
};

export default MainLayout;
