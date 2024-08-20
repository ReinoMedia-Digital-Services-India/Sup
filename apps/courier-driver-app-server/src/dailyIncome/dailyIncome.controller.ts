import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DailyIncomeService } from "./dailyIncome.service";
import { DailyIncomeControllerBase } from "./base/dailyIncome.controller.base";

@swagger.ApiTags("dailyIncomes")
@common.Controller("dailyIncomes")
export class DailyIncomeController extends DailyIncomeControllerBase {
  constructor(protected readonly service: DailyIncomeService) {
    super(service);
  }
}
