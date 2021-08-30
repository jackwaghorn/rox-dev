const Prismic = require("@prismicio/client");

exports.handler = async function(event, _, callback) {
  if (event.httpMethod !== "GET") {
    return callback(null, {
      statusCode: 200,
      body: "",
    });
  }

  Prismic.client("https://roxanakenjeeva.prismic.io/api/v2", {
    req: req,
  })
    .then(function(api) {
      return api.query(Prismic.Predicates.at("document.type", "product"));
    })
    .then(function(response) {
      console.log(response);

      callback(null, {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });
    }); // we would normally handle errors right? ;)
};
