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
              title: "E-commerce Platforms:",
              text: "Chatbots for customer support, optimizing product recommendations, automating order processing, and enhancing the overall shopping experience.",
            },
            {
              icon: AutomatedBacklogIcon,
              title: "Healthcare Facilities:",
              text: "AI-driven appointment scheduling systems, streamlining administrative tasks, and creating virtual health assistants for patient engagement.",
            },
            {
              icon: WorkflowsIcon,
              title: "Financial Institutions:",
              text: "Fraud detection algorithms, automating routine banking processes, providing AI-driven financial advice, and enhancing customer service through chatbots.",
            },
            {
              icon: CustomViewsIcon,
              title: "Manufacturing Companies:",
              text: "Predictive maintenance models, optimizing supply chain processes, and deploying robotics process automation (RPA) for repetitive tasks in the manufacturing workflow.",
            },
            {
              icon: DiscussionIcon,
              title: "Travel and Hospitality",
              text: "AI-powered travel recommendation engines, implementing chatbots for customer inquiries, optimizing pricing strategies, and automating booking processes.",
            },
            {
              icon: IssuesIcon,
              title: "Real Estate Agencies",
              text: "Virtual property assistants, automating lead generation and follow-ups, implementing AI for property valuation, and enhancing customer interactions through chatbots.",
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
              title: "Moksh Shah",
              text: "Moksh is a computer science student at Georgia Tech. He is passionate about web development and creating software solutions for small businesses.",
            },
            {
              image: "",
              imageClassName:
                "",
              title: "Ronit Jain",
              text: "Ronit Jain is a EECS major at UC Berkeley. He is passionate about AI and its applications in the real world. He has experience in building chatbots, computer vision, and NLP.",
            },
          ]}
        />
      </Features>

    </div>
  );


};
