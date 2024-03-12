import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  projectsId?: SortOrder;
  roles?: SortOrder;
  tasksId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
