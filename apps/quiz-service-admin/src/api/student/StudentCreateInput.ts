import { ResponseCreateNestedManyWithoutStudentsInput } from "./ResponseCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  responses?: ResponseCreateNestedManyWithoutStudentsInput;
};
