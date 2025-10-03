"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavigationRail from "@/components/NavigationRail";
import ProtectedRoute from "@/components/ProtectedRoute";
import LearningOutcmes from "@/components/LearningOutcomes";
import { getCourseDetails } from "@/app/lib/course";
import { Alert, Box, CircularProgress } from "@mui/material";
export interface Course {
  id: string;
  course_name: string;
  short_desc: string;
  chapters_count?: number;
  description?: string;
  created_at?: string;
  updated_at?: string;
  translations?: {
    id: number;
    course_id: string;
    locale: string;
    course_name: string;
    short_desc: string;
  }[];
}

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchCourseDetails();
    }
  }, [id]);

  const fetchCourseDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getCourseDetails({ course_id: id });
      setCourse(response?.data || null);
    } catch (err) {
      console.error("Error fetching course details:", err);
      setError("Failed to load course details.");
    } finally {
      setLoading(false);
    }
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
        <Alert severity="error" sx={{ width: "100%", maxWidth: 500 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <Alert severity="info" sx={{ width: "100%", maxWidth: 500 }}>
          No course found.
        </Alert>
      </Box>
    );
  }

  return (
    <ProtectedRoute>
      <main>
        <div className="container mx-auto pt-6">
          <div className="flex relative h-full">
            <NavigationRail />
            <div className="main-body p-6">
              <LearningOutcmes course={course} />
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
