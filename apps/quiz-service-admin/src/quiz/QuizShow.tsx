import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUIZ_TITLE_FIELD } from "./QuizTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const QuizShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="published" source="published" />
        <TextField label="timeLimit" source="timeLimit" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Response"
          target="quizId"
          label="Responses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isCorrect" source="isCorrect" />
            <ReferenceField label="Quiz" source="quiz.id" reference="Quiz">
              <TextField source={QUIZ_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="submittedAnswer" source="submittedAnswer" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
