import * as graphql from "@nestjs/graphql";
import { DailyIncomeResolverBase } from "./base/dailyIncome.resolver.base";
import { DailyIncome } from "./base/DailyIncome";
import { DailyIncomeService } from "./dailyIncome.service";

@graphql.Resolver(() => DailyIncome)
export class DailyIncomeResolver extends DailyIncomeResolverBase {
  constructor(protected readonly service: DailyIncomeService) {
    super(service);
  }
}
