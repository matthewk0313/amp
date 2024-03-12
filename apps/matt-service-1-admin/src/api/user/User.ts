import { Project } from "../project/Project";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Project | null;
  roles: JsonValue;
  tasks?: Task | null;
  updatedAt: Date;
  username: string;
};
