import { DailyIncomeWhereInput } from "./DailyIncomeWhereInput";
import { DailyIncomeOrderByInput } from "./DailyIncomeOrderByInput";

export type DailyIncomeFindManyArgs = {
  where?: DailyIncomeWhereInput;
  orderBy?: Array<DailyIncomeOrderByInput>;
  skip?: number;
  take?: number;
};
