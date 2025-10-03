import React from "react";
import Link from "next/link";
import FilterCol from "./filter";
import Faq from "../../../components/LearningOutcomes/Faq";
import FilterListing from "./filter-listing";
import CoursesList from "../../../components/Common/courses";
import RecentlyViewed from "./RecentlyViewed/index";
import CoursesListTwo from "../../../components/Common/courses-two";
import { courseData } from "../../../components/Common/course-data";
import FaqMain from "@/components/LearningOutcomes/FaqMain";

function ListingPage() {
  return (
    <>
      <FilterCol />
      <FilterListing />
      <CoursesList />
      <CoursesListTwo />
      <CoursesList />
      <div className="header-col flex items-center justify-between">
        <h2 className="mt-5 mb-8">Recently Viewed</h2>
        <Link
          href="/"
          className="btn-care btn-learn transition-all duration-300 ease-in hover:scale-105"
        >
          View more
        </Link>
      </div>
      <RecentlyViewed courses={courseData.slice(0, 4)} />
      <div className="btn-col text-center mb-10">
        <Link
          href="/"
          className="btn-care btn-learn transition-all duration-300 ease-in hover:scale-105"
        >
          View more
        </Link>
      </div>
      <div className="block bg-box transition-all duration-200 mt-5 mb-10">
        <FaqMain />
      </div>
    </>
  );
}

export default ListingPage;
