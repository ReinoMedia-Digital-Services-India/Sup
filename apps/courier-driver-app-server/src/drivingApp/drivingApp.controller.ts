import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DrivingAppService } from "./drivingApp.service";
import { DrivingAppControllerBase } from "./base/drivingApp.controller.base";

@swagger.ApiTags("drivingApps")
@common.Controller("drivingApps")
export class DrivingAppController extends DrivingAppControllerBase {
  constructor(protected readonly service: DrivingAppService) {
    super(service);
  }
}
