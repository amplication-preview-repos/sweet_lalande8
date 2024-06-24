import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type QuizWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  responses?: ResponseListRelationFilter;
  timeLimit?: IntNullableFilter;
  title?: StringNullableFilter;
};
