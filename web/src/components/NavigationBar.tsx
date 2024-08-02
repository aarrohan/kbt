"use client";
import { usePathname } from "next/navigation";
import NoticeBar from "./NoticeBar";
import Link from "next/link";

export default function NavigationBar() {
  const pathname = usePathname();

  if (pathname === "/virtual-trial-room") return;

  return (
    <nav
      className={`${
        pathname !== "/" ? "dark" : ""
      } absolute top-0 left-0 z-[1000] w-full`}
    >
      {pathname === "/" && <NoticeBar />}

      <div className="relative h-[100px] px-8 flex justify-between items-center">
        <Link
          href="/"
          className={`lg:absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 font-serif text-[2.45rem] font-bold ${
            pathname === "/" ? "text-white" : "text-dark"
          } duration-300`}
        >
          KBT
        </Link>

        <ul className="group hidden lg:flex gap-8">
          <li>
            <Link
              href="/shop"
              className={`text-xs uppercase tracking-[1.5px] ${
                pathname === "/"
                  ? "text-white group-hover:text-white/65"
                  : "text-dark group-hover:text-dark/65"
              } duration-300`}
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              href="/shop"
              className={`text-xs uppercase tracking-[1.5px] ${
                pathname === "/"
                  ? "text-white group-hover:text-white/65"
                  : "text-dark group-hover:text-dark/65"
              } duration-300`}
            >
              Dresses
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={`text-xs uppercase tracking-[1.5px] ${
                pathname === "/"
                  ? "text-white group-hover:text-white/65"
                  : "text-dark group-hover:text-dark/65"
              } duration-300`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/virtual-trial-room"
              className={`text-xs uppercase tracking-[1.5px] ${
                pathname === "/"
                  ? "text-white group-hover:text-white/65"
                  : "text-dark group-hover:text-dark/65"
              } duration-300`}
            >
              Virtual trial room
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <p
            className={`hidden sm:block text-xs uppercase tracking-[1.5px] ${
              pathname === "/" ? "text-white" : "text-dark"
            } duration-300`}
          >
            English / EN
          </p>

          <div className="flex items-center gap-5">
            <button>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 16.625L14.5834 13.8542M16.6667 9.10417C16.6667 12.8206 13.4954 15.8333 9.58333 15.8333C5.67132 15.8333 2.5 12.8206 2.5 9.10417C2.5 5.38775 5.67132 2.375 9.58333 2.375C13.4954 2.375 16.6667 5.38775 16.6667 9.10417Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    pathname === "/" ? "stroke-white" : "stroke-dark"
                  } duration-300`}
                />
              </svg>
            </button>

            <button>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9996 7C13.9996 7.92826 13.6309 8.8185 12.9745 9.47487C12.3181 10.1313 11.4279 10.5 10.4996 10.5C9.57138 10.5 8.68114 10.1313 8.02477 9.47487C7.36839 8.8185 6.99964 7.92826 6.99964 7M3.17871 6.47621L2.56621 13.8262C2.43463 15.4052 2.36884 16.1946 2.63574 16.8037C2.87024 17.3387 3.27654 17.7803 3.7903 18.0584C4.37505 18.375 5.16727 18.375 6.7517 18.375H14.2476C15.832 18.375 16.6242 18.375 17.209 18.0584C17.7227 17.7803 18.129 17.3387 18.3635 16.8037C18.6304 16.1946 18.5647 15.4052 18.4331 13.8262L17.8206 6.47621C17.7074 5.11766 17.6508 4.43838 17.3499 3.92425C17.085 3.47151 16.6905 3.10853 16.2173 2.88212C15.68 2.625 14.9983 2.625 13.6351 2.625L7.3642 2.625C6.00094 2.625 5.3193 2.625 4.78197 2.88211C4.30879 3.10853 3.9143 3.47151 3.64937 3.92425C3.34853 4.43838 3.29192 5.11766 3.17871 6.47621Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    pathname === "/" ? "stroke-white" : "stroke-dark"
                  } duration-300`}
                />
              </svg>
            </button>

            <button>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 13.125C7.72617 13.125 5.25944 14.4643 3.68899 16.5427C3.35098 16.9901 3.18198 17.2137 3.18751 17.516C3.19178 17.7495 3.33843 18.0442 3.52219 18.1884C3.76003 18.375 4.08963 18.375 4.74882 18.375H16.2512C16.9104 18.375 17.24 18.375 17.4778 18.1884C17.6616 18.0442 17.8082 17.7495 17.8125 17.516C17.818 17.2137 17.649 16.9901 17.311 16.5427C15.7405 14.4643 13.2738 13.125 10.5 13.125Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    pathname === "/" ? "stroke-white" : "stroke-dark"
                  } duration-300`}
                />
                <path
                  d="M10.5 10.5C12.6746 10.5 14.4375 8.73712 14.4375 6.5625C14.4375 4.38788 12.6746 2.625 10.5 2.625C8.32537 2.625 6.56249 4.38788 6.56249 6.5625C6.56249 8.73712 8.32537 10.5 10.5 10.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    pathname === "/" ? "stroke-white" : "stroke-dark"
                  } duration-300`}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
