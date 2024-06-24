import { Choice } from "../choice/Choice";

export type Question = {
  choices?: Array<Choice>;
  createdAt: Date;
  id: string;
  questionText: string | null;
  questionType?: "Option1" | null;
  updatedAt: Date;
};
