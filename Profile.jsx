import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Profile saved successfully for ${name}!`);
  }

  return (
    <div className="form-container">
      <h1>My Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;