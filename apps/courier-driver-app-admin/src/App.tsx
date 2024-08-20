import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TripList } from "./trip/TripList";
import { TripCreate } from "./trip/TripCreate";
import { TripEdit } from "./trip/TripEdit";
import { TripShow } from "./trip/TripShow";
import { DrivingAppList } from "./drivingApp/DrivingAppList";
import { DrivingAppCreate } from "./drivingApp/DrivingAppCreate";
import { DrivingAppEdit } from "./drivingApp/DrivingAppEdit";
import { DrivingAppShow } from "./drivingApp/DrivingAppShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { DailyIncomeList } from "./dailyIncome/DailyIncomeList";
import { DailyIncomeCreate } from "./dailyIncome/DailyIncomeCreate";
import { DailyIncomeEdit } from "./dailyIncome/DailyIncomeEdit";
import { DailyIncomeShow } from "./dailyIncome/DailyIncomeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CourierDriverApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Trip"
          list={TripList}
          edit={TripEdit}
          create={TripCreate}
          show={TripShow}
        />
        <Resource
          name="DrivingApp"
          list={DrivingAppList}
          edit={DrivingAppEdit}
          create={DrivingAppCreate}
          show={DrivingAppShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="DailyIncome"
          list={DailyIncomeList}
          edit={DailyIncomeEdit}
          create={DailyIncomeCreate}
          show={DailyIncomeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
