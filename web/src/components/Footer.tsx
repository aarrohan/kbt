import Link from "next/link";
import Image from "next/image";
import paymentMethodsImg from "@/assets/images/payment-methods.svg";

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-dark/50 grid xl:grid-cols-[500px_auto]">
        <div className="p-8 sm:p-14 border-b xl:border-b-0 xl:border-r border-dark/50">
          <h3 className="mb-4 font-serif text-2xl font-normal text-dark">
            Our story
          </h3>

          <p className="mb-8 text-sm text-dark">
            KBT is a leading women clothing brand. Pieces that bring out the
            best of you. Each dress has detailing that makes your body shine.
            The mission is to create clothes that suits all different body types
            - that will let individuality shine.
          </p>

          <div className="flex gap-5">
            <Link href="#" target="_blank">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5625 7.33333V14.6667C18.5625 16.8117 16.8117 18.5625 14.6667 18.5625H7.33333C5.17917 18.5625 3.4375 16.8117 3.4375 14.6667V7.33333C3.4375 5.17917 5.17917 3.4375 7.33333 3.4375H14.6667C16.8117 3.4375 18.5625 5.17917 18.5625 7.33333ZM19.9375 7.33333C19.9375 4.41833 17.5725 2.0625 14.6667 2.0625H7.33333C4.41833 2.0625 2.0625 4.41833 2.0625 7.33333V14.6667C2.0625 17.5725 4.41833 19.9375 7.33333 19.9375H14.6667C17.5725 19.9375 19.9375 17.5725 19.9375 14.6667V7.33333Z"
                  className="fill-dark"
                />
                <path
                  d="M10.7708 19.2497C10.7708 15.1247 10.7708 15.1247 10.7708 10.9997C10.7708 8.79967 11.3758 8.02051 13.75 8.02051C14.1258 8.02051 14.4375 7.70884 14.4375 7.33301C14.4375 6.94801 14.1258 6.64551 13.75 6.64551C10.5233 6.64551 9.39583 8.11217 9.39583 10.9997C9.39583 15.1247 9.39583 15.1247 9.39583 19.2497C9.39583 19.6255 9.69833 19.9372 10.0833 19.9372C10.4592 19.9372 10.7708 19.6255 10.7708 19.2497Z"
                  className="fill-dark"
                />
                <path
                  d="M8.25 12.6045H10.0833H13.75C14.1258 12.6045 14.4375 12.2928 14.4375 11.917C14.4375 11.532 14.1258 11.2295 13.75 11.2295H10.0833H8.25C7.865 11.2295 7.5625 11.532 7.5625 11.917C7.5625 12.2928 7.865 12.6045 8.25 12.6045Z"
                  className="fill-dark"
                />
              </svg>
            </Link>

            <Link href="#" target="_blank">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.90164 12.9065C5.85748 9.8448 8.35998 6.6365 11.4492 6.6365C14.1533 6.6365 15.8033 8.11233 15.8033 10.9906C15.8033 13.2456 14.3917 14.8865 12.8242 14.8865C11.5042 14.8865 10.8075 13.484 11.2017 11.1006C11.2567 10.7248 11.0092 10.3673 10.6333 10.3031C10.2575 10.239 9.9 10.4865 9.83583 10.8623C9.31333 13.9698 10.45 16.2431 12.7967 16.2431C15.1708 16.2431 17.1508 13.9423 17.1508 10.9723C17.1508 7.2965 14.85 5.24316 11.4217 5.24316C7.34248 5.24316 3.98748 9.5423 6.71914 13.6398C6.92081 13.9515 7.35164 14.034 7.67248 13.8231C7.98414 13.6123 8.06664 13.1815 7.85581 12.8606L7.90164 12.9065Z"
                  className="fill-dark"
                />
                <path
                  d="M10.3308 8.99252L7.58083 19.5342C7.47999 19.9008 7.69999 20.2767 8.06666 20.3683C8.43333 20.46 8.80916 20.24 8.90083 19.8733L11.6508 9.33167C11.7425 8.95586 11.5225 8.58002 11.1558 8.48836C10.78 8.38752 10.4042 8.60752 10.3125 8.97419L10.3308 8.99252Z"
                  className="fill-dark"
                />
                <path
                  d="M11 20.8538C16.4358 20.8538 20.8542 16.4355 20.8542 10.9997C20.8542 5.55467 16.4358 1.14551 11 1.14551C5.55499 1.14551 1.14583 5.55467 1.14583 10.9997C1.14583 16.4355 5.55499 20.8538 11 20.8538ZM11 19.4788C6.31583 19.4788 2.52083 15.6747 2.52083 10.9997C2.52083 6.31551 6.31583 2.52051 11 2.52051C15.675 2.52051 19.4792 6.31551 19.4792 10.9997C19.4792 15.6747 15.675 19.4788 11 19.4788Z"
                  className="fill-dark"
                />
              </svg>
            </Link>

            <Link href="#" target="_blank">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.3538C13.4017 15.3538 15.3542 13.4013 15.3542 10.9997C15.3542 8.58884 13.4017 6.64551 11 6.64551C8.58916 6.64551 6.64583 8.58884 6.64583 10.9997C6.64583 13.4013 8.58916 15.3538 11 15.3538ZM11 13.9788C9.35 13.9788 8.02083 12.6405 8.02083 10.9997C8.02083 9.34967 9.35 8.02051 11 8.02051C12.6408 8.02051 13.9792 9.34967 13.9792 10.9997C13.9792 12.6405 12.6408 13.9788 11 13.9788Z"
                  className="fill-dark"
                />
                <path
                  d="M3.4375 14.6667V7.33333C3.4375 5.17917 5.17917 3.4375 7.33333 3.4375H14.6667C16.8117 3.4375 18.5625 5.17917 18.5625 7.33333V14.6667C18.5625 16.8117 16.8117 18.5625 14.6667 18.5625H7.33333C5.17917 18.5625 3.4375 16.8117 3.4375 14.6667ZM2.0625 14.6667C2.0625 17.5725 4.41833 19.9375 7.33333 19.9375H14.6667C17.5725 19.9375 19.9375 17.5725 19.9375 14.6667V7.33333C19.9375 4.41833 17.5725 2.0625 14.6667 2.0625H7.33333C4.41833 2.0625 2.0625 4.41833 2.0625 7.33333V14.6667Z"
                  className="fill-dark"
                />
                <path
                  d="M16.5458 6.42647L16.555 6.40814C16.8025 6.12397 16.7842 5.68397 16.5 5.43647C16.2158 5.1798 15.7758 5.19814 15.5283 5.4823L15.5192 5.49147C15.2625 5.76647 15.2808 6.20647 15.565 6.45397C15.84 6.70147 16.28 6.68314 16.5275 6.39897L16.5458 6.42647Z"
                  className="fill-dark"
                />
              </svg>
            </Link>

            <Link href="#" target="_blank">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5625 7.33333V14.6667C18.5625 16.8117 16.8117 18.5625 14.6667 18.5625H7.33333C5.17917 18.5625 3.4375 16.8117 3.4375 14.6667V7.33333C3.4375 5.17917 5.17917 3.4375 7.33333 3.4375H14.6667C16.8117 3.4375 18.5625 5.17917 18.5625 7.33333ZM19.9375 7.33333C19.9375 4.41833 17.5725 2.0625 14.6667 2.0625H7.33333C4.41833 2.0625 2.0625 4.41833 2.0625 7.33333V14.6667C2.0625 17.5725 4.41833 19.9375 7.33333 19.9375H14.6667C17.5725 19.9375 19.9375 17.5725 19.9375 14.6667V7.33333Z"
                  className="fill-dark"
                />
                <path
                  d="M9.16666 10.3122C7.25999 10.3122 5.72916 11.843 5.72916 13.7497C5.72916 15.6472 7.25999 17.1872 9.16666 17.1872C11.0642 17.1872 12.6042 15.6472 12.6042 13.7497V5.49967L11.2567 5.71051C11.8158 7.40634 13.42 8.92801 15.5742 8.92801C15.95 8.92801 16.2617 8.61634 16.2617 8.24051C16.2617 7.85551 15.95 7.55301 15.5742 7.55301C14.0983 7.55301 12.9525 6.46217 12.5583 5.27051L11.2108 5.48134V13.7313C11.2108 14.868 10.285 15.7938 9.14832 15.7938C8.00249 15.7938 7.08582 14.868 7.08582 13.7313C7.08582 12.5855 8.00249 11.6688 9.14832 11.6688C9.52416 11.6688 9.83582 11.3572 9.83582 10.9813C9.83582 10.5963 9.52416 10.2938 9.14832 10.2938L9.16666 10.3122Z"
                  className="fill-dark"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <div className="sm:border-b border-dark/50 grid sm:grid-cols-[300px_auto] items-center">
            <div className="h-[50px] px-8 sm:border-r border-dark/50 flex items-center">
              <h3 className="font-serif text-2xl font-normal text-dark">
                Newsletter
              </h3>
            </div>

            <form className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Email address"
                className="flex-1 min-h-[50px] px-8 sm:px-6 bg-foreground-2 text-sm text-dark"
              />

              <button className="h-[50px] px-8 border border-transparent hover:border-dark bg-dark text-xs font-bold uppercase tracking-[1.5px] whitespace-nowrap text-white duration-300">
                Sign me up
              </button>
            </form>
          </div>

          <div className="p-8 sm:pr-28 flex flex-wrap justify-between gap-16">
            <div>
              <h3 className="mb-4 font-serif text-2xl font-normal text-dark">
                Our store
              </h3>

              <p className="mb-8 text-sm leading-6 text-dark">
                Mood Stockholm <br /> Regeringsgatan 48 <br /> 111 14 Stockholm
                <br />
                <br />
                Mon-Fri 10-19 <br /> Saturday 10-18 <br /> Sunday 11-17
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl font-normal text-dark">
                Company
              </h3>

              <div className="links-wrapper group w-fit space-y-5 flex flex-col">
                <Link
                  href={"/about"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  About us
                </Link>

                <Link
                  href={"/"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Care & material
                </Link>

                <Link
                  href={"/"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Our factories
                </Link>

                <Link
                  href={"/"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Our store
                </Link>

                <Link
                  href={"/"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Career
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl font-normal text-dark">
                Help
              </h3>

              <div className="links-wrapper group w-fit space-y-5 flex flex-col">
                <Link
                  href={"/info/faq"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  FAQ
                </Link>

                <Link
                  href={"/info/returns-and-exchanges"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Returns & exchanges
                </Link>

                <Link
                  href={"/info/contact-us"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Contact us
                </Link>

                <Link
                  href={"/info/shipping-and-delivery"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Shipping & delivery
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl font-normal text-dark">
                Community
              </h3>

              <div className="links-wrapper group w-fit space-y-5 flex flex-col">
                <Link
                  href={"/"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Join our list
                </Link>

                <Link
                  href={"/"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Account
                </Link>

                <Link
                  href={"/virtual-trial-room"}
                  className="text-sm text-dark group-hover:text-dark/65 duration-300"
                >
                  Virtual trial room
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-8 border-t border-dark/50 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <p className="text-sm text-dark/50">© Copyright 2024 - KBT</p>

          <div className="links-wrapper group flex gap-8">
            <Link
              href={"/info/terms-and-conditions"}
              className="text-sm text-dark group-hover:text-dark/65 duration-300"
            >
              Terms
            </Link>

            <Link
              href={"/info/privacy-policy"}
              className="text-sm text-dark group-hover:text-dark/65 duration-300"
            >
              Policy
            </Link>

            <Link
              href={"/info/cookies"}
              className="text-sm text-dark group-hover:text-dark/65 duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>

        <Image
          src={paymentMethodsImg}
          alt=""
          className="w-full max-w-[374px] sm:h-[24px]"
        />
      </div>
    </footer>
  );
}
