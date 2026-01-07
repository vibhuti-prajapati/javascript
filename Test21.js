// async await

const API_URL = "httpshtfh7";
async function getData() {
  try {
    const data = await fetch(API_URL);
    // const jsonVal = await data.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getData();
