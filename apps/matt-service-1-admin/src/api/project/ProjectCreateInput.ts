import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
};
