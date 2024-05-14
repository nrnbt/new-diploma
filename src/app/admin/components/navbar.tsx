"use client";

import DefaultUser from "../../../../public/default-user.webp";

import { useState, type FC } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";

const AdminNavbar: FC = function () {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Admin
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <DarkThemeToggle />

            <div className="flex items-center ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full"
                    src={DefaultUser.src}
                    alt="user photo"
                  />
                </button>
              </div>

              <div
                className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  profileOpen ? "block" : "hidden"
                } absolute top-6 right-0`}
                id="dropdown-2"
                // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1250px, 61px);"
                data-popper-placement="bottom"
              >
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
