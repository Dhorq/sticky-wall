import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Sticky Wall</h1>
      <Link
        to="/create"
        className="rounded-full size-5 flex justify-center items-center text-center p-5 font-black bg-amber-300 xl:mr-15"
      >
        +
      </Link>
    </div>
  );
};

export default Navbar;
