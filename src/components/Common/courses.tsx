"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCourseList } from "../../app/lib/course";
import { useRouter } from "next/navigation";
import { Alert, Box, CircularProgress } from "@mui/material";

interface Course {
  id: string;
  course_name: string;
  short_desc: string;
  chapters_count: number;
  translations?: {
    id: number;
    course_id: string;
    locale: string;
    course_name: string;
    short_desc: string;
  }[];
}

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visibleLimit, setVisibleLimit] = useState<number>(8); // 👈 initially show 8
  const router = useRouter();

  // static image placeholders
  const courseImages = [
    "/images/img-course-1.png",
    "/images/img-course-2.png",
    "/images/img-course-1.png",
    "/images/img-course-2.png",
    "/images/img-course-1.png",
    "/images/img-course-2.png",
    "/images/img-course-1.png",
    "/images/img-course-2.png",
    "/images/img-course-1.png",
    "/images/img-course-2.png",
  ];

  // Fetch courses from API
  const fetchCourses = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await getCourseList({ page });
      const data = response;

      setCourses(data?.data?.courses || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleViewMore = () => {
    setVisibleLimit(100);
  };

  const handleCardClick = (id: string) => {
    router.push(`/courses/${id}`);
  };
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <Alert severity="error" sx={{ width: "100%", maxWidth: 400 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <Alert severity="info" sx={{ width: "100%", maxWidth: 400 }}>
          No courses available.
        </Alert>
      </Box>
    );
  }

  return (
    <>
      <div className="course-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 flex-nowrap">
        {courses.slice(0, visibleLimit).map((course, index) => {
          const title = course.course_name || "Untitled Course";
          const description = course.short_desc || "No description available.";
          const chapters = course.chapters_count || 0;
          const duration = "30 min";
          const rating = "4.5";
          const imageSrc =
            courseImages[index % courseImages.length] ||
            "/images/default-course.png";

          return (
            <div
              className="course-content transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              key={course.id}
              onClick={() => handleCardClick(course.id)}
            >
              <div className="badge-free">Free</div>
              <div className="course-col">
                <div className="course-img-col">
                  <Image
                    src={imageSrc}
                    alt={title}
                    width={300}
                    height={300}
                    className="object-cover"
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
                  <h6>{title}</h6>
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
                    <span>{rating}</span>
                  </div>
                </div>

                <p>{description}</p>

                <div className="course-overview flex items-center justify-between">
                  <div className="course-duration">
                    <div className="flex items-center course-hours">
                      <Image
                        src="/images/icons/icon-modules.svg"
                        alt="chapters"
                        width={20}
                        height={20}
                      />
                      <span>{chapters} chapters</span>
                    </div>
                    <div className="flex items-center course-hours">
                      <Image
                        src="/images/icons/icon-timer.svg"
                        alt="duration"
                        width={20}
                        height={20}
                      />
                      <span>{duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="btn-care btn-learn transition-all duration-300 ease-in hover:scale-105"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {visibleLimit < courses.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewMore}
            className="btn-care btn-outline px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            View More
          </button>
        </div>
      )}
    </>
  );
}
