//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT = 5000;

const products = require("./products");
const getRequestData = require("./utils");


const server = http.createServer(async (request, response) => {

  // Get all products
  if (request.url === "/api/v1/products" && request.method === "GET") {
    response.writeHead(200, {
      "content-type": "application/json"
    })
    response.end(JSON.stringify(products.products));


  } else if (request.url.match(/\/api\/v1\/products\/([0-9])/) && request.method === "GET") {
    // Get a product with specified id
    const id = request.url.split("/")[4];
    const product = products.products.find(p => p.id === parseInt(id));

    if (!product) {
      response.writeHead(404, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify("No product with the specific id is available."));
    } else {
      response.writeHead(200, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify(product));
    }

  } else if (request.url === "/api/v1/products" && request.method === "POST") {
    // Create a new product
    let req_body = await getRequestData(request);
    const newProductId = JSON.parse(req_body).id;
    const product = products.products.find(p => p.id === parseInt(newProductId));
    if (product) {
      response.writeHead(404, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify("A product with the specific id already exists. Choose another id."));
    } else {
      products.products.push(JSON.parse(req_body));
      response.writeHead(201, {
        "content-type": "application/json"
      });
      response.end(req_body);
    }
  }
  else if (request.url.match(/\/api\/v1\/products\/([0-9])/) && request.method === "PUT") {
    // Update a specific product
    const id = request.url.split("/")[4];
    const product = products.products.find(t => t.id === parseInt(id));
    if (!product) {
      response.writeHead(404, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify("No product with the specific id is available."));
    } else {
      let req_body = await getRequestData(request);
      const index = products.products.indexOf(product);
      products.products.splice(index, 1);
      products.products.push(JSON.parse(req_body));
      response.writeHead(200, {
        "content-type": "application/json"
      });
      response.end(req_body);
    }
  }
  else if (request.url.match(/\/api\/v1\/products\/([0-9])/) && request.method === "DELETE") {
    // Delete a specific Product
    const id = request.url.split("/")[4];
    const product = products.products.find(p => p.id === parseInt(id));
    if (!product) {
      response.writeHead(404, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify("No product with the specific id is available."));
    } else {
      const index = products.products.indexOf(product);
      products.products.splice(index, 1);
      response.writeHead(200, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify("Deleted the specified product."));
    }
  }

})

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})

server.on("error", (error) => {
  if (error.code = "EADRINUSE") {
    console.log("Port already in use");
  }
});