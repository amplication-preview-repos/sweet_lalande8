import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ResponseUpdateInput = {
  isCorrect?: boolean | null;
  quiz?: QuizWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  submittedAnswer?: string | null;
};
