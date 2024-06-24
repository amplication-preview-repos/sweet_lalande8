import { ResponseUpdateManyWithoutStudentsInput } from "./ResponseUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  responses?: ResponseUpdateManyWithoutStudentsInput;
};
