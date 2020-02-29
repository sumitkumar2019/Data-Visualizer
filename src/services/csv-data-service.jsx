const records = {
  tableName: "Table1",
  data: [
    {
      name: "name1",
      address: "address1"
    },
    {
      name: "name2",
      address: "address2"
    },
    {
      name: "name3",
      address: "address3"
    },
    {
      name: "name4",
      address: "address4"
    }
  ]
};
const data = {
  source: "CSV",
  dataSources: [
    {
      name: "Order",
      fileName: "Order.csv",
      tables: [
        {
          name: "Order",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ]
        }
      ]
    },
    {
      name: "Customers",
      fileName: "Customers.csv",
      tables: [
        {
          name: "Customers",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ]
        }
      ]
    },
    {
      name: "Transactions",
      fileName: "Transactions.csv",
      tables: [
        {
          name: "Transactions",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ]
        }
      ]
    }
  ]
};

//[x] - parse a csv file and get all the header column and primary key ids - /metadata/csv - post
export function getCSVMetaData() {
  console.log("getCSVMetaData");
  return data;
}

//[ ] - parse a csv file and get all the data records with column header - /csv/get-records/{fileName} – post
export function parseCSVFile(file) {
  console.log("parseCSVFile" + file);
  return records;
}

//[ ] - create a mysql script for table creation and record genertion - /create-table-from-csv - post
export function createScriptForCSVRecords(records) {
  let script = "";
  console.log("createScriptForCSVRecords: " + records);
  console.log("createScriptForCSVRecords: " + script);
  return script;
}

//[] - create a tables from gnerated scripts
export function createTableFromScript(script) {
  console.log("createTableFromScript: " + script);
  return records;
}
