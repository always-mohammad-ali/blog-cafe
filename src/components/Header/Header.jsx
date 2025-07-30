import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="">
      <div className="flex justify-between w-5/6 mx-auto my-5">
        <h1 className="text-2xl">Blog Cafe</h1>
        <img className="w-12" src={profile} alt="" />
      </div>
      <hr className="w-5/6 mx-auto" />
    </header>
  );
};

export default Header;
