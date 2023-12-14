import { Button, Highlight } from "../button";
import { Container } from "../container";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { BoltIllustration } from "../illustrations/bolt";
import { KeyboardShortcuts } from "../keyboard-shortcuts";
import { CommandMenu } from "../command-menu";

export const MainFeaturesGrid = () => (
  <div className="text-white" id="what_we_do">
    <Container>
      <div className="text-center" >
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          What We Do        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          We create AI software solutions tailored to your needs. We specialize in working with small businesses who otherwise may not have access to such resources.
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Custom Chatbots</p>
          <p className="text-md text-primary-text">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <BoltIllustration />
          </div>
          <p className="mb-4 text-3xl">Automated Email Marketing</p>
          <p className="text-md text-primary-text">
            Create and send an email newsletter to thousands of customers in seconds.
          </p>
        </div>
        <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
            <LogoLightIllustration />
          </div>
          <p className="mb-4 text-3xl">Custom Data Analysis</p>
          <p className="text-md text-primary-text">
            Comes with built-in workflows that create focus and routine.
          </p>

        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <CommandMenu />
          <div className="transition-opacity md:[.opened+&]:opacity-0">
            <p className="mb-4 text-3xl">Make Better Business Decisions</p>
            <p className="text-md text-primary-text">
              Use our AI suggested actions to make better business decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
