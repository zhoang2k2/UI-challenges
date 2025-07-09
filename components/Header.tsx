import Link from "next/link";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { TYPOGRAPHY_TAG_VARIANT } from "@/constants/typographyVariants";
import { Container } from "./Container";

export const Header = () => {
  const navigateList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },

    {
      label: "Our Gallery",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/",
    },
    {
      label: "Services",
      href: "/",
    },
  ];

  return (
    <header className="header">
      <Container>
        <div className="flex justify-between items-center">
          <Typography
            content={<a href="/">InDisign</a>}
            variant={TYPOGRAPHY_TAG_VARIANT.HEAD_1}
          />

          <nav className="header-navigate">
            <ul className="header-navigate-list flex gap-12">
              {navigateList?.map((item, index) => (
                <li className="header-navigate-item text-xl" key={index}>
                  <Link href={item?.href}>
                    <Typography content={item?.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button label="Contact Us" />
        </div>
      </Container>
    </header>
  );
};
