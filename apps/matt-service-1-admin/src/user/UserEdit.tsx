import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { TaskTitle } from "../task/TaskTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput
          source="projects.id"
          reference="Project"
          label="Projects"
        >
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="tasks.id" reference="Task" label="Tasks">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
