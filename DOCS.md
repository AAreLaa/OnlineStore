Live Demo [Here](online-store-aarelaa.vercel.app/)

# Online Store Website

## Project Structure

- Four folders: api, app, components, types

  a. api folder with apis.ts to fetch the data from the api (https://fakestoreapi.com/)

  b. app folder with the pages 
  -  Homepage that lists out the product image, name, price, and description of the products fetched from the api (https://fakestoreapi.com/)
  - Single Product Details page that displays the details of the product of which the product card has been clicked
  - Search page that displays list of products whose title matches with searched text
  c. components folder with the reuseable components and used images

  d. types folder with the type of the product, params

## To run locally

1. Clone the repository using following command:

```
git clone https://github.com/AAreLaa/OnlineStore.git
```

2. Navigate to the cloned repo:

```
cd OnlineStore
```

3. Install the dependencies and run the server

```
npm i
npm run dev
```

Now, you may visit url: 'http://localhost:3000/' to see the live server.

