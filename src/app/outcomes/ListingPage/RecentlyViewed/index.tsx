import React from "react";
import Image from "next/image";
import Link from "next/link";
import { courseData } from "@/components/Common/course-data";

function RecentlyViewed({ courses = courseData }) {
  if (!courses || courses.length === 0) {
    return <div>No courses available</div>;
  }

  return (
    <div className="course-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 flex-nowrap">
      {courses.map((course) => (
        <div className="course-content" key={course.id}>
          <div className="badge-free">Free</div>
          <div className="course-col">
            <div className="course-img-col">
              <Image
                src={course.src}
                alt="carelearning"
                width={300}
                height={300}
              />
              <div className="fav-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                >
                  <path
                    d="M17.328 0C15.156 0 13.212 1.08764 12 2.75618C10.788 1.08764 8.844 0 6.672 0C2.988 0 0 3.08989 0 6.90899C0 8.37978 0.228 9.73932 0.624 11C2.52 17.1798 8.364 20.8753 11.256 21.8888C11.664 22.0371 12.336 22.0371 12.744 21.8888C15.636 20.8753 21.48 17.1798 23.376 11C23.772 9.73932 24 8.37978 24 6.90899C24 3.08989 21.012 0 17.328 0Z"
                    fill="white"
                    fillOpacity="0.56"
                  />
                </svg>
              </div>
            </div>

            <div className="course-header flex items-center justify-between mt-5">
              <h6>{course.title}</h6>
              <div className="rating-col flex items-center gap-1">
                <span>
                  <svg
                    className="rate-active"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M11 0l2.935 5.947 6.565.954-4.75 4.63 1.121 6.534L11 15.18l-5.871 3.086 1.121-6.534-4.75-4.63 6.565-.954L11 0z" />
                  </svg>
                </span>
                <span>{course.rating}</span>
              </div>
            </div>
            <p>{course.content}</p>
            <div className="course-overview flex items-center justify-between">
              <div className="course-duration">
                <div className="flex items-center course-hours">
                  <Image
                    src="/images/icons/icon-modules.svg"
                    alt="carelearning"
                    width={20}
                    height={20}
                  />
                  <span>{course.chapters} chapters</span>
                </div>
                <div className="flex items-center course-hours">
                  <Image
                    src="/images/icons/icon-timer.svg"
                    alt="carelearning"
                    width={20}
                    height={20}
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
  );
}

export default RecentlyViewed;
