import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectWhereUniqueInput | null;
  roles: InputJsonValue;
  tasks?: TaskWhereUniqueInput | null;
  username: string;
};
