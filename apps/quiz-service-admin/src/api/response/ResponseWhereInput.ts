import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResponseWhereInput = {
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  quiz?: QuizWhereUniqueInput;
  student?: StudentWhereUniqueInput;
  submittedAnswer?: StringNullableFilter;
};
