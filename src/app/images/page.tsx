import Image from "next/image";
import Button from "../components/button/Button";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/images`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: "an orange dog jumping over a cliff" }),
  });
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
        {JSON.stringify(data)}
        {/* {data && <Image src={data.image_url} alt="something" width={50} height={50} />} */}
        {data && <img src={data.image_url} alt="something"/>}
      </div>
    </main>
  );
}
