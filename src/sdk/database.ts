import RxDB from "rxdb";
import SQLite from "react-native-sqlite-2";
import SQLiteAdapterFactory from "pouchdb-adapter-react-native-sqlite";

import todoSchema from "./todo-schema.json";

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);

RxDB.plugin(SQLiteAdapter);
RxDB.plugin(require("pouchdb-adapter-http"));

async function createDatabase() {
  const database = await RxDB.create({
    name: "tododb",
    adapter: "react-native-sqlite"
  });
  await database.collection({
    name: "todo",
    schema: todoSchema
  });
  return database;
}
