import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  projects?: ProjectWhereUniqueInput;
  tasks?: TaskWhereUniqueInput;
  username?: StringFilter;
};
