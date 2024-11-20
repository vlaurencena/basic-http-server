# Basic HTTP server

This project implements a REST API using vanilla JavaScript to manage e-commerce product details. It provides essential product management functionalities that form the backbone of any e-commerce platform.

Consumers can perform key operations such as adding products to the catalog, retrieving product details, and updating or deleting products, ensuring a smooth and efficient shopping experience.

## Features
The API supports the following operations:

* **Add New Products**: Add a new product to the catalog.
* **Fetch All Products**: Retrieve the complete list of products.
* **Fetch Product by ID**: Get detailed information for a specific product.
* **Update Product Details**: Modify information for an existing product.
* **Delete a Product**: Remove a product from the catalog.

## Prerequisites
* **Node.js**: Ensure you have Node.js installed on your machine.
* **Postman**: Use Postman (or any API testing tool) to test the API endpoints.

## Setup and running the application
Follow these steps to run the application:

1. Clone repository and navigate to its directory:

```bash
git clone https://github.com/vlaurencena/basic-http-server
cd basic-http-server
```

2. Install dependencies:

```bash
npm install  
```

3. Run the application
```bash
npm start  
```

4. Use Postman to test the API endpoints. The repository includes a Postman collection file (```postman_collection/Product-master.postman_collection.json```) to simplify the testing process. Import this file into Postman for pre-configured requests.

## Endpoints

The following endpoints are available in this API:

| **Method** | **Endpoint**       | **Description**                |
|------------|--------------------|--------------------------------|
| `GET`      | `/products`        | Fetch all products             |
| `GET`      | `/products/:id`    | Fetch a specific product by ID |
| `POST`     | `/products`        | Add a new product to the catalog |
| `PUT`      | `/products/:id`    | Update details of an existing product |
| `DELETE`   | `/products/:id`    | Remove a product from the catalog |


