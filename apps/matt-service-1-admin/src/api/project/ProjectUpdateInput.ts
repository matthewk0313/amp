import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
