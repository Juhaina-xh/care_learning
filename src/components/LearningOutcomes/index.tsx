import React from "react";
import Banner from "./Banner";
import Tabs from "./Tabs";
import "./index.css";
interface Course {
  id: string;
  course_name: string;
  short_desc: string;
  chapters_count?: number;
  hours?: string;
  modules?: string;
  learning_outcomes?: string;
  resources?: string;
  faqs?: string;
}

export interface LearningOutcomesProps {
  course: Course;
}
function LearningOutcmes({ course }: LearningOutcomesProps) {
  return (
    <>
      <Banner course={course} />
      <Tabs course={course} />
    </>
  );
}

export default LearningOutcmes;
