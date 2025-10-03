import axiosInstance from "./axios";

export const endpoints = {
  course: {
    list: "/api/courses",
    details: "/api/view-course",
  },
};

// Fetch details of a single course
export const getCourseDetails = async (payload) => {
  const response = await axiosInstance.post(endpoints.course.details, payload);
  return response.data;
};

// Fetch list of all courses
export const getCourseList = async (payload) => {
  const response = await axiosInstance.post(endpoints.course.list, payload);
  return response.data;
};
