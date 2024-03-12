import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  tasks?: TaskListRelationFilter;
};
