// Import data
import { navData } from "../../data";
// Import Icon
import { CgClose } from "react-icons/cg";

function NavMobile({ setOpenNavMobile }) {
  // navMovile

  return (
    <nav className="lg:hidden bg-violet top-0 bottom-0 h-full w-80">
      {/* close btn */}
      <div
        onClick={() => setOpenNavMobile(false)}
        className="absolute top-8 right-2 cursor-pointer"
      >
        <CgClose className="text-2xl" />
      </div>
      {/* muenu list */}
      <div>
        <div className="flex items-center justify-center m-auto h-screen">
          <ul className="text-xl flex flex-col  text-left justify-center gap-y-8 ">
            {navData.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;
