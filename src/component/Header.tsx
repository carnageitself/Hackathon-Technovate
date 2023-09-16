
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <div className="w-screen h-32 bg-[#FEFEFF] px-28  flex justify-between items-center">
      <img src={logo} alt="" className="h-20" />
      <ul
        className=" font-normal  font-sans sm:flex hidden gap-10 text-gray-700"
        style={{ fontFamily: "Poppins" }}
      >
        <li className="border-b-4 border-[#EE619C] w-14 flex justify-center">
          {" "}
          <a href="/"> Home</a>
        </li>

        <li className="border-b-4 border-[#EE619C] w-14 flex justify-center">
          {" "}
          <a href="/about"> About</a>
        </li>

        <li className="border-b-4 border-[#EE619C] w-14 flex justify-center">
          {" "}
          <a href="/register"> Sign Up</a>
        </li>
        <li className="border-b-4 border-[#EE619C] w-14 flex justify-center">
          {" "}
          <a href="/login"> Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
