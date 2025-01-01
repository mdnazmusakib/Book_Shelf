import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { RxCalendar } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; 
import { onAuthStateChanged } from "firebase/auth";
import user from "../assets/user.png";

const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString(); // Format as 'MM/DD/YYYY' or 'DD/MM/YYYY' based on locale
      const time = now.toLocaleTimeString(); // Format as 'HH:MM:SS AM/PM'
      setCurrentDateTime({ date, time });
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  

  return (
    <nav className="p-4 flex justify-between h-24 bg-[#F3F3F7] w-[100%]">
      <div className="navbar hidden lg:block">
        <div className=" flex justify-between w-full gap-3">
          <div className="form-control flex flex-row items-center border-2 rounded-[40px] pr-3 bg-white">
            <select className="select select-info text-center w-full max-w-[100px] font-medium border-none bg-[#DCDCDC] rounded-none rounded-l-[40px] focus:border-none focus:outline-none">
              <option disabled selected>
                All
              </option>
              <option>Action</option>
              <option>Mystery</option>
              <option>Thriller</option>
            </select>
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto border-none mx-2 focus:border-none focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex items-center justify-center gap-3">
                <button type="submit">
                  <FaSearch className="text-xl text-[#F76B56]" />
                </button>
                <div className="border border-r-[#DCDCDC] h-10"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.53953 3.34814C5.53953 3.60701 5.32969 3.81689 5.07078 3.81689H1.99945C1.6602 3.81689 1.38418 4.07283 1.38418 4.38736V7.33189C1.38418 7.59076 1.1743 7.80064 0.91543 7.80064C0.656523 7.80064 0.44668 7.59076 0.44668 7.33189V4.38736C0.44668 3.55588 1.14324 2.87939 1.99945 2.87939H5.07082C5.32969 2.87939 5.53953 3.08928 5.53953 3.34814ZM19.0846 12.1995C18.8257 12.1995 18.6158 12.4094 18.6158 12.6682V15.6128C18.6158 15.9274 18.3398 16.1833 18.0006 16.1833H14.9292C14.6703 16.1833 14.4604 16.3931 14.4604 16.652C14.4604 16.9109 14.6703 17.1208 14.9292 17.1208H18.0006C18.8568 17.1208 19.5533 16.4443 19.5533 15.6128V12.6682C19.5533 12.4094 19.3435 12.1995 19.0846 12.1995ZM4.9757 16.1832H1.90434C1.56504 16.1832 1.28906 15.9273 1.28906 15.6128V12.6682C1.28906 12.4093 1.07922 12.1994 0.820312 12.1994C0.561406 12.1994 0.351562 12.4093 0.351562 12.6682V15.6128C0.351562 16.4442 1.04812 17.1207 1.90434 17.1207H4.9757C5.23461 17.1207 5.44445 16.9108 5.44445 16.652C5.44445 16.3931 5.23461 16.1832 4.9757 16.1832ZM18.0957 2.87939H15.0243C14.7654 2.87939 14.5555 3.08928 14.5555 3.34814C14.5555 3.60701 14.7654 3.81689 15.0243 3.81689H18.0957C18.435 3.81689 18.7109 4.07283 18.7109 4.38736V7.33189C18.7109 7.59076 18.9208 7.80064 19.1797 7.80064C19.4386 7.80064 19.6484 7.59076 19.6484 7.33189V4.38736C19.6484 3.55588 18.9519 2.87939 18.0957 2.87939ZM4.43691 12.5312V7.62049C4.43691 7.36158 4.22707 7.15174 3.96816 7.15174C3.70926 7.15174 3.49941 7.36158 3.49941 7.62049V12.5312C3.49941 12.7901 3.70926 12.9999 3.96816 12.9999C4.22707 12.9999 4.43691 12.7901 4.43691 12.5312ZM7.98938 7.15174C7.73047 7.15174 7.52063 7.36158 7.52063 7.62049V12.5312C7.52063 12.7901 7.73047 12.9999 7.98938 12.9999C8.24828 12.9999 8.45813 12.7901 8.45813 12.5312V7.62049C8.45813 7.36158 8.24828 7.15174 7.98938 7.15174ZM12.0106 7.15174C11.7517 7.15174 11.5419 7.36158 11.5419 7.62049V12.5312C11.5419 12.7901 11.7517 12.9999 12.0106 12.9999C12.2695 12.9999 12.4794 12.7901 12.4794 12.5312V7.62049C12.4794 7.36158 12.2695 7.15174 12.0106 7.15174ZM16.5006 12.5312V7.62049C16.5006 7.36158 16.2907 7.15174 16.0318 7.15174C15.7729 7.15174 15.5631 7.36158 15.5631 7.62049V12.5312C15.5631 12.7901 15.7729 12.9999 16.0318 12.9999C16.2907 12.9999 16.5006 12.7901 16.5006 12.5312Z"
                    fill="#F76B56"
                  />
                </svg>
              </div>
            </form>
          </div>
          <div className=" flex items-center  border-2 rounded-[40px] pl-3 pr-3 bg-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_63_76)">
                <path
                  d="M14.1667 16.6667H2.08333C1.531 16.666 1.00148 16.4463 0.610925 16.0557C0.220367 15.6652 0.000661607 15.1357 0 14.5833L0 2.08333C0 0.935 0.935 0 2.08333 0H8.75C8.83686 4.95826e-06 8.92155 0.0271571 8.99223 0.0776595C9.0629 0.128162 9.11602 0.199489 9.14417 0.281667L14.5608 16.115C14.5819 16.1777 14.5878 16.2446 14.5781 16.31C14.5683 16.3755 14.5432 16.4377 14.5047 16.4915C14.4662 16.5454 14.4155 16.5893 14.3568 16.6198C14.298 16.6502 14.2328 16.6663 14.1667 16.6667ZM2.08333 0.833333C1.39417 0.833333 0.833333 1.39417 0.833333 2.08333V14.5833C0.833333 15.2725 1.39417 15.8333 2.08333 15.8333H13.5833L8.4525 0.833333H2.08333Z"
                  fill="#F76B56"
                />
                <path
                  d="M17.9167 20H11.25C11.1652 20 11.0825 19.9742 11.0128 19.926C10.9431 19.8777 10.8898 19.8094 10.86 19.73L9.60999 16.3967C9.5711 16.2933 9.57488 16.1786 9.62051 16.078C9.66615 15.9773 9.74989 15.8989 9.85333 15.86C9.95676 15.8211 10.0714 15.8249 10.1721 15.8706C10.2727 15.9162 10.3511 15.9999 10.39 16.1034L11.5392 19.1667H17.9167C18.6058 19.1667 19.1667 18.6059 19.1667 17.9167V5.41671C19.1667 4.72754 18.6058 4.16671 17.9167 4.16671H10C9.88949 4.16671 9.78351 4.12281 9.70537 4.04467C9.62723 3.96653 9.58333 3.86055 9.58333 3.75004C9.58333 3.63953 9.62723 3.53355 9.70537 3.45541C9.78351 3.37727 9.88949 3.33337 10 3.33337H17.9167C19.065 3.33337 20 4.26837 20 5.41671V17.9167C20 19.065 19.065 20 17.9167 20Z"
                  fill="#F76B56"
                />
                <path
                  d="M11.25 20C11.1699 20.0001 11.0914 19.977 11.024 19.9336C10.9567 19.8902 10.9032 19.8283 10.8702 19.7553C10.8371 19.6823 10.8258 19.6013 10.8376 19.522C10.8494 19.4428 10.8838 19.3686 10.9367 19.3084L13.8533 15.975C13.8894 15.9338 13.9332 15.9001 13.9823 15.8759C14.0314 15.8516 14.0848 15.8372 14.1394 15.8336C14.194 15.83 14.2488 15.8371 14.3007 15.8547C14.3526 15.8722 14.4005 15.8998 14.4417 15.9359C14.4829 15.9719 14.5166 16.0158 14.5408 16.0648C14.5651 16.1139 14.5795 16.1673 14.5831 16.2219C14.5867 16.2766 14.5796 16.3314 14.562 16.3832C14.5445 16.4351 14.5169 16.483 14.4808 16.5242L11.5642 19.8575C11.5249 19.9023 11.4766 19.9381 11.4225 19.9627C11.3683 19.9873 11.3095 20 11.25 20ZM7.91667 11.6667C7.83067 11.6668 7.74674 11.6403 7.67645 11.5908C7.60615 11.5412 7.55295 11.4711 7.52417 11.39L5.83334 6.65587L4.1425 11.39C4.10537 11.4941 4.02841 11.5792 3.92855 11.6266C3.82868 11.6739 3.7141 11.6797 3.61 11.6425C3.50591 11.6054 3.42082 11.5284 3.37347 11.4286C3.32612 11.3287 3.32037 11.2141 3.3575 11.11L5.44084 5.2767C5.55917 4.94504 6.1075 4.94504 6.225 5.2767L8.30834 11.11C8.33075 11.1729 8.33775 11.2401 8.32876 11.3062C8.31977 11.3723 8.29504 11.4353 8.25667 11.4898C8.21829 11.5443 8.16738 11.5889 8.10821 11.6197C8.04905 11.6504 7.98336 11.6666 7.91667 11.6667Z"
                  fill="#F76B56"
                />
                <path
                  d="M6.66667 9.16671H5C4.8895 9.16671 4.78351 9.12281 4.70537 9.04467C4.62723 8.96653 4.58334 8.86055 4.58334 8.75004C4.58334 8.63953 4.62723 8.53355 4.70537 8.45541C4.78351 8.37727 4.8895 8.33337 5 8.33337H6.66667C6.77718 8.33337 6.88316 8.37727 6.9613 8.45541C7.03944 8.53355 7.08334 8.63953 7.08334 8.75004C7.08334 8.86055 7.03944 8.96653 6.9613 9.04467C6.88316 9.12281 6.77718 9.16671 6.66667 9.16671ZM17.9167 9.16671H12.0833C11.9728 9.16671 11.8668 9.12281 11.7887 9.04467C11.7106 8.96653 11.6667 8.86055 11.6667 8.75004C11.6667 8.63953 11.7106 8.53355 11.7887 8.45541C11.8668 8.37727 11.9728 8.33337 12.0833 8.33337H17.9167C18.0272 8.33337 18.1332 8.37727 18.2113 8.45541C18.2894 8.53355 18.3333 8.63953 18.3333 8.75004C18.3333 8.86055 18.2894 8.96653 18.2113 9.04467C18.1332 9.12281 18.0272 9.16671 17.9167 9.16671Z"
                  fill="#F76B56"
                />
                <path
                  d="M14.5833 9.16667C14.4728 9.16667 14.3668 9.12277 14.2887 9.04463C14.2106 8.96649 14.1667 8.86051 14.1667 8.75V7.91667C14.1667 7.80616 14.2106 7.70018 14.2887 7.62204C14.3668 7.5439 14.4728 7.5 14.5833 7.5C14.6938 7.5 14.7998 7.5439 14.878 7.62204C14.9561 7.70018 15 7.80616 15 7.91667V8.75C15 8.86051 14.9561 8.96649 14.878 9.04463C14.7998 9.12277 14.6938 9.16667 14.5833 9.16667ZM13.3333 14.1667C13.2445 14.1677 13.1577 14.1403 13.0857 14.0883C13.0136 14.0364 12.9602 13.9627 12.9331 13.8781C12.9061 13.7935 12.9069 13.7024 12.9354 13.6183C12.9639 13.5342 13.0187 13.4615 13.0917 13.4108C14.9158 12.115 16.25 9.47167 16.25 8.75083C16.25 8.64033 16.2939 8.53435 16.372 8.45621C16.4502 8.37807 16.5562 8.33417 16.6667 8.33417C16.7772 8.33417 16.8832 8.37807 16.9613 8.45621C17.0394 8.53435 17.0833 8.64033 17.0833 8.75083C17.0833 9.84917 15.4775 12.7383 13.575 14.0908C13.5041 14.1402 13.4198 14.1667 13.3333 14.1667Z"
                  fill="#F76B56"
                />
                <path
                  d="M16.6667 14.9999C16.5626 15.0003 16.4623 14.9613 16.3858 14.8908C16.0833 14.6141 13.4208 12.1549 12.9475 10.9899C12.9103 10.8885 12.9139 10.7766 12.9576 10.6777C13.0013 10.5789 13.0818 10.501 13.1819 10.4603C13.282 10.4196 13.394 10.4195 13.4943 10.4598C13.5945 10.5002 13.6751 10.5779 13.7192 10.6766C14.06 11.5158 16.1658 13.5591 16.9483 14.2758C17.0104 14.3325 17.0538 14.4066 17.0729 14.4885C17.092 14.5703 17.086 14.656 17.0555 14.7343C17.025 14.8126 16.9716 14.8799 16.9022 14.9273C16.8328 14.9747 16.7507 15 16.6667 14.9999Z"
                  fill="#F76B56"
                />
              </g>
              <defs>
                <clipPath id="clip0_63_76">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <select className="select select-info w-[160px] font-medium max-w-xs border-none text-center  focus:border-none focus:outline-none">
              <option disabled selected>
                Language
              </option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
            </select>
          </div>
          <div className=" text-[#4D4D4D] border-2 rounded-[40px] h-[51.2px] px-14 flex justify-between bg-white">
            <div className="flex flex-row items-center  gap-16">
              <div className="flex flex-row items-center gap-2 font-medium w-[120px]">
                <LuClock9 className="text-lg text-[#F76A56]" />
                {currentDateTime.time}
              </div>
              <div className="flex flex-row items-center gap-2 font-medium">
                <RxCalendar className="text-lg text-[#F76A56]" />
                {currentDateTime.date}
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end ">
            <div className="flex items-center justify-center gap-2 border-2 rounded-[40px] h-[51.2px] pr-3 bg-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user}
                  />
                </div>
              </div>
              <div>
                <h1>Sakib</h1>
              </div>
              <MdArrowDropDown className="text-lg" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/Login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar bg-base-100 flex justify-between lg:hidden rounded-[40px]">
        <div className="navbar-start w-auto">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Search">Search</Link>
              </li>
              <li>
                <Link to="/Myshelf">My Shelf</Link>
              </li>
              <li>
                <Link to="Favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center w-auto">
          <h1 className="text-center font-normal text-sm">
            My Book <br />{" "}
            <span className="text-orange-500 font-medium text-lg tracking-[0.2rem] ">
              Shelf
            </span>{" "}
          </h1>
        </div>
        <div className="navbar-end w-auto">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/Login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
