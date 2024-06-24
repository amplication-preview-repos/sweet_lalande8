import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ChoiceWhereInput = {
  choiceText?: StringNullableFilter;
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  question?: QuestionWhereUniqueInput;
};
