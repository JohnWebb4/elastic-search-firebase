const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

function addIndex(index, body) {
  return client.index({
    index,
    body,
  });
}

async function searchIndex(index, body) {
  const { body: result } = await client.search({
    index,
    body,
  });

  return result;
}

module.exports = {
  addIndex,
  searchIndex,
};
