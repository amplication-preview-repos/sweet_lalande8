import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  choices?: ChoiceListRelationFilter;
  id?: StringFilter;
  questionText?: StringNullableFilter;
  questionType?: "Option1";
};
