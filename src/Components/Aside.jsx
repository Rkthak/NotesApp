import AsideButton from "./AsideButton";
import Logo from "./Logo";

const Aside = () => {
  return (
    <div className="min-h-screen bg-slate-900 w-62.5 border-r-slate-700 border-r-2 p-4 flex flex-col justify-between">
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
  );
};

export default Aside;
