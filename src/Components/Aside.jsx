import AsideButton from "./AsideButton";
import Logo from "./Logo";

const Aside = () => {
  return (
    <>
      <div className="h-screen bg-slate-900 w-70 border-r-slate-700 border-r-2 p-4 hidden lg:flex flex-col justify-between">
        <div>
          {/* LOGO */}
          <Logo />

          {/* ASIDE BUTTONS */}
          <div>
            <AsideButton btnName={"Notes"} link={"/"} />
            <AsideButton btnName={"Archive"} link={"/archive"} />
            <AsideButton btnName={"Trash"} link={"/trash"} />
          </div>
        </div>
        {/* can be added user profile viewer and user info after login --in bottom */}
      </div>
      <div className="lg:hidden fixed bottom-0 w-full p-4 bg-slate-900 border-t-2 border-slate-700 flex justify-around items-center z-50">
        <AsideButton btnName={"Notes"} link={"/"} icon={"📝"} />
        <AsideButton btnName={"Archive"} link={"/archive"} icon={"📦"} />
        <AsideButton btnName={"Trash"} link={"/trash"} icon={"🗑️"} />
      </div>
    </>
  );
};

export default Aside;
