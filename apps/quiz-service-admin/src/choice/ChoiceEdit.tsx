import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";

export const ChoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="choiceText" source="choiceText" />
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="Question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
