import RxDB from "rxdb";

async function createDatabase() {
  const database = await RxDB.create({
    name: "tododb",
    adapter: "idb"
  });
  return database;
}
