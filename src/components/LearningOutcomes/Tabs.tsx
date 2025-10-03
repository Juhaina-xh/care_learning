"use client";
import React, { useState } from "react";
import TabOutcomes from "./TabOutcomes";
import Modules from "./Modules";
import Discussions from "./Discussions";
import Faq from "./Faq";
import { LearningOutcomesProps } from ".";

function Tabs({ course }: LearningOutcomesProps) {
  const [ToggleState, setToggleState] = useState(1);

  const tabList = [
    {
      id: 1,
      title: "Learning Outcomes",
      content: (
        <TabOutcomes
          outcomes={
            Array.isArray(course?.learning_outcomes)
              ? course.learning_outcomes
              : []
          }
        />
      ),
    },
    {
      id: 2,
      title: "Modules",
      content: (
        <Modules
          modules={Array.isArray(course?.modules) ? course.modules : []}
        />
      ),
    },
    {
      id: 3,
      title: "Resources",
      content: (
        <TabOutcomes
          outcomes={Array.isArray(course?.resources) ? course.resources : []}
        />
      ),
    },
    // dummy data
    { id: 4, title: "Discussions", content: <Discussions /> },
    {
      id: 5,
      title: "FAQ",
      content: <Faq faqs={Array.isArray(course?.faqs) ? course.faqs : []} />,
    },
  ];

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const getActiveContent = (index: number) =>
    ToggleState === index ? "block" : "hidden";

  return (
    <div className="w-full mx-auto tab-sec">
      <ul className="flex tab-list mx-auto w-fit gap-1">
        {tabList.map((tab) => (
          <li key={tab.id} className={tab.id === ToggleState ? "active" : ""}>
            <button className="tab-btn" onClick={() => toggleTab(tab.id)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabList.map((tab) => (
          <div
            key={tab.id}
            className={`${getActiveContent(
              tab.id
            )} bg-box transition-all duration-200`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
