"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <div id="customers">
      <Features color="194,97,254" colorDark="53,42,79" >

        <Features.Main
          title={
            <>
              Customers
              <br />
              who we serve
            </>
          }
          image=""
          text="Tailored solutions to diverse industries."
        />
        <Features.Grid
          features={[
            {
              icon: ParentSubIcon,
              title: "E-commerce:",
              text: "Optimize overall shopping experience.",
            },
            {
              icon: AutomatedBacklogIcon,
              title: "Healthcare Facilities:",
              text: "Streamline administrative tasks.",
            },
            {
              icon: WorkflowsIcon,
              title: "Financial Institutions:",
              text: "Automate routine banking processes.",
            },
            {
              icon: CustomViewsIcon,
              title: "Manufacturing Companies:",
              text: "Optimize supply chain processes.",
            },
            {
              icon: DiscussionIcon,
              title: "Travel and Hospitality",
              text: "AI travel recommendation engines.",
            },
            {
              icon: IssuesIcon,
              title: "Real Estate Agencies",
              text: "Create virtual property assistants.",
            },
          ]}
        />


        <h2 id="about" className="text-gradient mb-11 translate-y-[50%] pt-[12rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl [.is-visible_&]:translate-y-0">
          About Us
        </h2>
        <Features.Cards

          features={[
            {
              image: "",
              imageClassName: "",
              title: "Who We Are",
              text:  "  Our team consists of driven students from varied academic backgrounds, which enables us to approach AI from multiple perspectives, including computer science, data analysis, software development, and business strategy. We firmly believe that the future belongs to those who can effectively harness the power of artificial intelligence and we are dedicated to bridging the gap of understanding and application for businesses. We understand that one size does not fit all in terms of AI solutions. This is why we commit ourselves to understanding the unique needs, challenges, and objectives of each business we work with. With this understanding, we then apply our technical skills and knowledge to develop AI solutions specifically tailored to enhance their operation.",
            }
          ]}
        />
      </Features>

    </div>
  );


};
