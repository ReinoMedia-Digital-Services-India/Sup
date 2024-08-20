import * as graphql from "@nestjs/graphql";
import { DrivingAppResolverBase } from "./base/drivingApp.resolver.base";
import { DrivingApp } from "./base/DrivingApp";
import { DrivingAppService } from "./drivingApp.service";

@graphql.Resolver(() => DrivingApp)
export class DrivingAppResolver extends DrivingAppResolverBase {
  constructor(protected readonly service: DrivingAppService) {
    super(service);
  }
}
