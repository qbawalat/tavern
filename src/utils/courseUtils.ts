import { CourseTypes } from "../constants/CourseTypes";
import { Courses } from "../constants/Courses";

export const getCourse = (courseNumber: number) => {
  switch (courseNumber) {
    case CourseTypes.NOOB_COURSE:
      return Courses.noobCourse;
    case CourseTypes.ADEPT_COURSE:
      return Courses.adeptCourse;
    case CourseTypes.PRO_COURSE:
      return Courses.proCourse;
    case CourseTypes.ULTRA_COURSE:
      return Courses.ultraCourse;
  }
};
