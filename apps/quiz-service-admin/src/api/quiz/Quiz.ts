import { Response } from "../response/Response";

export type Quiz = {
  createdAt: Date;
  description: string | null;
  id: string;
  published: boolean | null;
  responses?: Array<Response>;
  timeLimit: number | null;
  title: string | null;
  updatedAt: Date;
};
