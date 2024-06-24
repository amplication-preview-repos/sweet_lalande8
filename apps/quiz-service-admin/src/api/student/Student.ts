import { Response } from "../response/Response";

export type Student = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  responses?: Array<Response>;
  updatedAt: Date;
};
