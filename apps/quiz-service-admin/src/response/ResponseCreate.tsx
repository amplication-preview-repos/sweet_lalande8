import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { QuizTitle } from "../quiz/QuizTitle";
import { StudentTitle } from "../student/StudentTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput source="quiz.id" reference="Quiz" label="Quiz">
          <SelectInput optionText={QuizTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <TextInput label="submittedAnswer" source="submittedAnswer" />
      </SimpleForm>
    </Create>
  );
};
