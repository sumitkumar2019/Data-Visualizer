import _ from "lodash";
const tableMetaData = {
  name: "Table1",
  columns: [
    { name: "column1" },
    { name: "column2" },
    { name: "column3" },
    { name: "column4" }
  ],
  primaryKey: "column1"
};
const record1 = {
  tableName: "Table1",
  columns: ["name", "address"],
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
const record2 = {
  tableName: "Table2",
  columns: ["name", "address"],
  data: [
    {
      name: "name1",
      address: "address1"
    },
    {
      name: "name2",
      address: "address2"
    }
  ]
};
const record3 = {
  tableName: null,
  columns: null,
  data: null
};
const queryResult = {
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
  source: "MySQL",
  dataSources: [
    {
      name: "Database1",
      tables: [
        {
          name: "Table1",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        },
        {
          name: "Table2",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        },
        {
          name: "Table3",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        }
      ]
    },
    {
      name: "Database2",
      tables: [
        {
          name: "Table1",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        },
        {
          name: "Table2",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        }
      ]
    },
    {
      name: "Database3",
      tables: [
        {
          name: "Table1",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        },
        {
          name: "Table2",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKey: "column1"
        }
      ]
    },
    {
      name: "Database4",
      tables: [
        {
          name: "Table1",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKeys: "column1"
        },
        {
          name: "Table2",
          columns: [
            { name: "column1" },
            { name: "column2" },
            { name: "column3" },
            { name: "column4" }
          ],
          primaryKeys: "column1"
        }
      ]
    }
  ]
};
const mappingRecords = {
  tableName: "Mapped Records",
  columns: ["name", "address"],
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

/**const requestBody={
    credentials: {
        username: "",
            password: "",
                ipaddress: ""
    },
    query: "",
    tableName:""
} */

function validateMySQLCredentials(instanceCredentials) {
  console.log(
    "validateMySQLCredentials: username:" +
      instanceCredentials.username +
      "|password:" +
      instanceCredentials.password +
      "|ipaddress:" +
      instanceCredentials.ipaddress
  );
  if (!_.isEmpty(instanceCredentials) || !_.isUndefined(instanceCredentials)) {
    if (
      _.isEmpty(instanceCredentials.username) ||
      _.isUndefined(instanceCredentials.username)
    ) {
      throw new Error("Username required");
    }
    if (
      _.isEmpty(instanceCredentials.password) ||
      _.isUndefined(instanceCredentials.password)
    ) {
      throw new Error("Password required");
    }
    if (
      _.isEmpty(instanceCredentials.ipaddress) ||
      _.isUndefined(instanceCredentials.ipaddress)
    ) {
      throw new Error("Ip Address required");
    }
    console.log(
      "validateMySQLCredentials: validated successfully " + instanceCredentials
    );
  } else {
    throw new Error("Mysql Credentials Required");
  }
}
//[ x ] - validate mysql login - /validate-login - post
export function login(instanceCredentials) {
  validateMySQLCredentials(instanceCredentials);
  console.log(
    "login: trying login with credentials: username:" +
      instanceCredentials.username
  );
  console.log(
    "login: trying login with credentials: password:" +
      instanceCredentials.password
  );
  console.log(
    "login: trying login with credentials: ipaddress:" +
      instanceCredentials.ipaddress
  );
  //axios post request with credentials: return true or false
  if (
    instanceCredentials.ipaddress === "localhost" &&
    instanceCredentials.username === "root" &&
    instanceCredentials.password === "root"
  ) {
    console.log("login: login successful with: " + instanceCredentials);
    return {
      loggedIn: true,
      message: "Successfully loggedIn to MySqL Instance"
    };
  }

  console.log("login: login unsuccessful with: " + instanceCredentials);
  return {
    loggedIn: false,
    message:
      "Failed to loggedIn: Either Username or Password or Ip Address is incorrect"
  };
}

//[ x] - get all databses, tables, columns, primary key column-  /metadata/mysql - post
export async function getMySQLMetaData(instanceCredentials) {
  //axios post request to get all meta data details
  console.log("getMySQLMetaData with: " + instanceCredentials);
  const result = await data;
  return result;
}

//[ x ] - get primary keys of given table – metadata/mysql/{tablename} - get
export async function getTableMetadata(tableName) {
  console.log("getTableMetadata with: " + tableName);
  const result = await tableMetaData;
  return result;
}

// [x] - select all the data from a given table - /mysql/get-records/{tableName}
export async function getTableRecords(tableName) {
  console.log("getTableRecords with: " + tableName);
  if (_.isUndefined(tableName) || _.isNull(tableName) || _.isEmpty(tableName)) {
    throw new Error("Table name is required");
  }
  //send axios request to get all records from the table for preview
  console.log("getTableRecords successful for: " + tableName);
  let result = {};
  if (tableName === "Table1") {
    result = await record1;
  } else if (tableName === "Table2") {
    result = await record2;
  } else {
    result = await record3;
  }

  return result;
}

//[x] - create a response with given query data - /mysql/get-custom-records - post
export async function getQueryResultForCustomQuery(query) {
  console.log("getQueryResultForCustomQuery with: " + query);
  if (_.isUndefined(query) || _.isNull(query) || _.isEmpty(query)) {
    throw new Error("SQL Query is required");
  }

  //send axios request to get all records from the table for a given query
  console.log("getQueryResultForCustomQuery successful with: " + query);
  const result = await queryResult;
  return result;
}
function validateTables(tables) {
  console.log("validateTables : " + tables);
  if (_.isUndefined(tables) || _.isNull(tables) || _.isEmpty(tables)) {
    throw new Error("Tables are required for creating joins");
  }
  tables.forEach(table => {
    if (_.isUndefined(table) || _.isNull(table) || _.isEmpty(table)) {
      throw new Error("Tables are required for creating joins");
    }
  });
  console.log("validateTables successful with: " + tables);
  return;
}

function createCommaSeperatedColumns(columns) {
  let query = "";
  for (let i = 0; i < columns.length; i++) {
    if (i === columns.length - 1) {
      query = query + columns[i];
    } else {
      query = query + columns[i] + ", ";
    }
  }
  return query;
}

export function createSelectQueryForTables(tables, columns) {
  validateTables(tables);
  let columnQuery = " * ";

  if (!_.isEmpty(columns)) {
    columnQuery = createCommaSeperatedColumns(columns);
  }

  console.log("createSelectQueryForTables : " + tables);

  let query = "select " + columnQuery + " from ";
  for (let i = 0; i < tables.length; i++) {
    if (i === tables.length - 1) {
      console.log(tables[i]);
      query = query + tables[i] + " as tab" + i;
    } else {
      query = query + tables[i] + " as tab" + i + ", ";
    }
  }
  console.log("createSelectQueryForTables Query: " + query);
  return query;
}

//[x] - create join query from given tables and their primary key ids – join - post
export function appendIdsForTables(ids, query) {
  const table1WhereQuery = " where tab0." + ids[0] + " = ";
  const table1AndQuery = " and tab0." + ids[0] + " = ";

  for (let i = 1; i < ids.length; i++) {
    if (i === 1) {
      query = query + table1WhereQuery + "tab" + i + "." + ids[i];
    } else {
      query = query + table1AndQuery + "tab" + i + "." + ids[i];
    }
  }
  console.log("appendIdsForTables Query: " + query);
  return query;
}

//[x] - append given sort preferences to query – transform
export function appendOrderByClause(orderType, query, orderByColumn) {
  console.log("appendOrderByClause: " + query);
  query = query + " ORDER BY " + orderByColumn + " " + orderType;
  console.log("appendOrderByClause Query: " + query);
  return query;
}

export function executeQuery(query) {
  return mappingRecords;
}
