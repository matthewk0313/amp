import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
};
