import { getMySQLMetaData } from "./mysql-data-services";
import { getCSVMetaData } from "./csv-data-service";
export function getMetaData(datasource) {
  if (datasource === "mysql") {
    return getMySQLMetaData();
  }
  if (datasource === "csv") {
    return getCSVMetaData();
  }
  return null;
}
