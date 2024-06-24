import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ResponseTitle } from "../response/ResponseTitle";

export const QuizEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="published" source="published" />
        <ReferenceArrayInput
          source="responses"
          reference="Response"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResponseTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="timeLimit" source="timeLimit" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
