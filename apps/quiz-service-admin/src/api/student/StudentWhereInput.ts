import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  responses?: ResponseListRelationFilter;
};
