import { Quiz } from "../quiz/Quiz";
import { Student } from "../student/Student";

export type Response = {
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  quiz?: Quiz | null;
  student?: Student | null;
  submittedAnswer: string | null;
  updatedAt: Date;
};
