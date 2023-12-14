import { Button, Highlight } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomePageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Hermes 2024 Release - Built for small business</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Automate
      <br className="hidden md:block" /> Your Business with AI
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Get affordable corporate level automation and data analysis tools.
      <br className="hidden md:block" /> Meet the new standard.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="#contact"
      variant="primary"
      size="large"
    >
      <span>Get Started</span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
