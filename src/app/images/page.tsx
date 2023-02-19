import Button from "../components/button/Button";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/hello`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ImagesPage() {
  const data = await getData();
  console.log({ data });
  return (
    <main>
      <div className="content-container">
        <h1>Images</h1>
        <input type="text" />
        {
            JSON.stringify(data)
        }
        {/* <Button /> */}
      </div>
    </main>
  );
}
