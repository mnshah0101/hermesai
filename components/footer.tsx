import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "",
    links: [

    ],
  },
  {
    title: "",
    links: [

    ],
  },
  {
    title: "",
    links: [

    ],
  },
  {
    title: "",
    links: [

    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-md">
    <Container className="flex flex-col justify-between md:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey logo-text">
            <Logo className="mr-4 h-4 w-4 logo-text" /> HERMES GROUP
          </div>
          <div className="mt-auto flex space-x-4 text-grey">

          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]">
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="[&_a]:last:mb-0">
                  <Link
                    href={''}
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                  >
                    {
                      ''
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
