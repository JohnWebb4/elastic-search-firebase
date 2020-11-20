const functions = require("firebase-functions");

const { addIndex, searchIndex } = require("./src/elastic.client");

exports.indexMessageToElastic = functions.database
  .ref("/message/{messageId}")
  .onWrite((event) => {
    const messageData = event.data.val();

    addIndex("message", messageData);
  });

exports.setIndex = functions.https.onRequest(async (req, res) => {
  if (req.method == "POST") {
    const index = "game-of-thrones";
    const body = {
      character: "Daenerys Targaryen",
      quote: "I am the mother of dragons.",
    };

    await addIndex(index, body);

    res.status(201).end();
  } else {
    res.status(404).end();
  }
});

exports.getIndex = functions.https.onRequest(async (req, res) => {
  if (req.method === "GET") {
    const index = "game-of-thrones";
    const body = {
      query: {
        match: {
          quote: "winter",
        },
      },
    };

    const result = await searchIndex(index, body);

    res.send(result.hits.hits);
  } else {
    res.status(404).end();
  }
});
