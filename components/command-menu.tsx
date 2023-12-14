"use client";

import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AddLabels,
  AssignToIcon,
  BacklogIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  HighIcon,
  InProgressIcon,
  LabelIcon,
  LowIcon,
  MediumIcon,
  NoPriorityIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
} from "./icons/command-bar";

const commandOptions = [
  {
    label: "Highest Performing Employees",
    icon: AssignToIcon,
    subOptions: [
      { label: "Jori - $83,000", icon: PersonIcon },
      { label: "Karri - $75,000", icon: PersonIcon },
      { label: "Tuomas - $71,400", icon: PersonIcon },
    ],
  },
  {
    label: "Initiatives",
    icon: ChangeStatusIcon,
    subOptions: [
      { label: "Higher SEO Ranking", icon: BacklogIcon },
      { label: "Utilize Social Media", icon: TodoIcon },
      { label: "Increase Awareness at Farmers Markets", icon: InProgressIcon },
    ],
  },
  {
    label: "Ordering",
    icon: ChangePriorityIcon,
    subOptions: [
      { label: "Less Beef in Inventory", icon: UrgentIcon },
      { label: "Increase Tomatoes", icon: NoPriorityIcon },
      { label: "Increase Pasta", icon: MediumIcon }
    ],
  },
  {
    label: "Highest Performing Products",
    icon: AddLabels,
    subOptions: [
      { label: "Spicy Thai Green Curry", icon: () => <LabelIcon type="bug" /> },
      { label: "Moroccan Chickpea Tagine", icon: () => <LabelIcon type="feature" /> },
      { label: "Creamy Tuscan Chicken", icon: () => <LabelIcon type="improvement" /> },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSetSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains("command-menu-button");

      // Check if the element we're currently clicking (`e.target`) is NOT inside `commandMenuRef` i.e. we clicked outside
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);
      setOpened(clickedOutside ? false : true);
      if (clickedOutside) setSearchValue("");
    };

    window.addEventListener("click", toggleCommandMenu);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    // If no search value is provided, we return all options.
    if (searchValue === "") return options;

    // If a search value is provided, we do a simple search based on that input.
    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    // First remove any animation
    commandMenuRef.current.classList.remove("animate-bounce");
    // Then check for browser reflow
    commandMenuRef.current.clientWidth;
    // Then add animation class back
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "absolute left-[calc(50%+7.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2",
          opened && "translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]",
          !opened && "translate-y-[12.8rem] opacity-60"
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/50">
          Suggested Business Decisions
        </span>
        <input
          placeholder="Search for recommendations"
          className="w-full bg-transparent p-5 text-lg outline-none"
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
        <div className="flex w-full flex-col text-sm text-off-white">
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              key={label}
              onClick={(e) => {
                const clickedRootItem = "subOptions" in menuItem;
                setSetSelectedOption(clickedRootItem ? index : null);
                setSearchValue("");
                if (!clickedRootItem) {
                  setOpened(false);
                  // Stop the event from bubbling up to not trigger `toggleCommandMenu`. Else it will open the menu again.
                  e.stopPropagation();
                }
              }}
              className="command-menu-button flex h-[4.6rem] w-full items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/[0.05]"
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
