"use client";

import { FormEventHandler } from "react";
import Button from "../components/button/Button";

export default function ContactPage() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  return (
    <main>
      <div className="content-container">
        <h1>Contact page</h1>
      </div>
    </main>
  );
}
