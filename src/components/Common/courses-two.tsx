import React from "react";
import Image from "next/image";
import Link from "next/link";

const courseDataTwo = [
  {
    id: 1,
    title: "Food Safety & Hygiene",
    content:
      "Understand 'capacity' as the ability of an individual to make decisions for...",
    src: "/images/img-course-1.png",
    rating: "4.8",
    chapters: "12",
    duration: "30 Mins",
  },
  {
    id: 2,
    title: "Food Safety & Hygiene",
    content:
      "Understand 'capacity' as the ability of an individual to make decisions for...",
    src: "/images/img-course-2.png",
    rating: "4.8",
    chapters: "12",
    duration: "30 Mins",
  },
  {
    id: 3,
    title: "Food Safety & Hygiene",
    content:
      "Understand 'capacity' as the ability of an individual to make decisions for...",
    src: "/images/img-course-1.png",
    rating: "4.8",
    chapters: "12",
    duration: "30 Mins",
  },
  {
    id: 4,
    title: "Food Safety & Hygiene",
    content:
      "Understand 'capacity' as the ability of an individual to make decisions for...",
    src: "/images/img-course-2.png",
    rating: "4.8",
    chapters: "12",
    duration: "30 Mins",
  },
];

function CoursesListTwo() {
  return (
    <div className="coursesTwo-sec">
      <div className="header-col flex items-center justify-between">
        <h2 className="flex items-center gap-3 mt-4">
          Trending Courses
          <span>
            <Image
              src="/images/icons/icon-fire.svg"
              alt="carelearning"
              width={40}
              height={40}
            />
          </span>
        </h2>
        <Link
          href="/"
          className="btn-care btn-learn transition-all duration-300 ease-in hover:scale-105"
        >
          View more
        </Link>
      </div>
      <div className="coursesTwo-row course-row flex flex-nowrap">
        {courseDataTwo.slice(0,2).map((course)=>(
        <div key={course.id} className="w-1/2 course-col coursesTwo-col grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Image
            className="course-img"
            src={course.src}
            alt="carelearning"
            width={300}
            height={300}
          />
          <div className="course-contents">
            <div className="course-header">
              <div className="badge-free">Free</div>
              <h6>{course.title}</h6>
              <p>
                {course.content}
              </p>
            </div>
            <div className="course-overview">
              <div className="course-duration grid grid-cols-1 md:grid-cols-2 mb-5">
                <div className="flex items-center course-hours">
                  <Image
                    src="/images/icons/icon-modules.svg"
                    alt="carelearning"
                    width={50}
                    height={50}
                  />
                  <span>{course.chapters} chapters</span>
                </div>
                <div className="flex course-hours">
                  <Image
                    src="/images/icons/icon-timer.svg"
                    alt="carelearning"
                    width={50}
                    height={50}
                  />
                  <span>{course.duration}</span>
                </div>
              </div>
              <Link
                href="/"
                className="btn-care btn-learn transition-all duration-300 ease-in hover:scale-105"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesListTwo;
