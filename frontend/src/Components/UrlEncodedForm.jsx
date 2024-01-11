import React, { useState } from "react";

const UrlEncodedForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    // that how you can create custom url-encoded data without using 'URLSearchParams' class.
    const formDataString = Object.entries(userData)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    //When sending data in the application/x-www-form-urlencoded format, you use URLSearchParams to create a set of key-value pairs representing the form fields and their values. The URLSearchParams object is specifically designed for creating URL-encoded data.
    // const formData = new URLSearchParams(userData);

    // if you are passing directly an object inside 'URLSearchParams' class then it convert that object as urlencoded and you dont need to additionally append the data.
    // formData.append("email", email);
    // formData.append("password", password);

    await fetch("http://localhost:8080/urlEncodedForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataString,
    });
  };
  return (
    <div className="container">
      <h1>UrlEncoded Form </h1>
      <form onSubmit={handleSubmit} encType="application/x-www-form-urlencoded">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UrlEncodedForm;
