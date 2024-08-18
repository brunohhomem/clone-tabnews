import database from "../../../../infra/databse";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "ausdhuahdasudhasudashd" });
}

export default status;
