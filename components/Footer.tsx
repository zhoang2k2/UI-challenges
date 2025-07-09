import GridLayout from "@/layouts/GridLayout";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { TYPOGRAPHY_TAG_VARIANT } from "@/constants/typographyVariants";
import Link from "next/link";

const Footer = () => {
  const shopNavigateList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/",
    },
    {
      label: "Our Services",
      href: "/",
    },
  ];

  const clientNavigateList = [
    {
      label: "Contact US",
      href: "/",
    },
    {
      label: "Privacy Policy",
      href: "/",
    },
  ];

  const socialNavigateList = [
    {
      label: "FB",
      href: "/",
    },
    {
      label: "TW",
      href: "/",
    },
    {
      label: "IN",
      href: "/",
    },
  ];

  return (
    <footer className="footer bg-black mt-20 pb-8">
      <Container>
        <GridLayout>
          <div className="col-span-6 max-w-[80%] flex flex-col gap-12">
            <Typography
              className="!text-white"
              content="InDesign"
              variant={TYPOGRAPHY_TAG_VARIANT.HEAD_3}
            />

            <Typography
              className="!text-white !text-sm"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Typography
              className="!text-white mt-auto !text-sm"
              content="Copyright © 2024 InDesign"
              variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
            />
          </div>

          <div className="col-span-6 flex flex-col gap-8">
            <Typography
              className="!text-white text-2xl font-semibold"
              content="Sign Up Our News Latter"
            />

            <form className="form-subscribe border-b-2 border-b-solid border-b-white relative w-[76%]">
              <input
                className="bg-transparent border-none px-0 py-2 w-full text-white text-sm placeholder:text-white focus:outline-none"
                type="email"
                name=""
                placeholder="Enter You Email Address"
              />

              <span className="absolute top-1/2 right-0 leading-0 text-white text-4xl">
                &rarr;
              </span>
            </form>

            <div className="flex gap-24">
              <nav className="footer-navigate">
                <ul className="footer-navigate-list flex flex-col gap-4">
                  {shopNavigateList?.map((item, index) => (
                    <li
                      className="footer-navigate-item text-xl text-white"
                      key={index}
                    >
                      <Link href={item?.href}>
                        <Typography content={item?.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="footer-navigate">
                <ul className="footer-navigate-list flex flex-col gap-4">
                  {clientNavigateList?.map((item, index) => (
                    <li
                      className="footer-navigate-item text-xl text-white"
                      key={index}
                    >
                      <Link href={item?.href}>
                        <Typography content={item?.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="social-list flex gap-8 ml-auto">
              {socialNavigateList?.map((item, index) => (
                <li
                  className="social-item text-white text-base uppercase"
                  key={index}
                >
                  <Link href={item?.href}>
                    <Typography content={item?.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </GridLayout>
      </Container>
    </footer>
  );
};

export default Footer;
