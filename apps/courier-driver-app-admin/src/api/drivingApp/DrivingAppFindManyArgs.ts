import { DrivingAppWhereInput } from "./DrivingAppWhereInput";
import { DrivingAppOrderByInput } from "./DrivingAppOrderByInput";

export type DrivingAppFindManyArgs = {
  where?: DrivingAppWhereInput;
  orderBy?: Array<DrivingAppOrderByInput>;
  skip?: number;
  take?: number;
};
