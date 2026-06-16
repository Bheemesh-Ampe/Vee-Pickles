import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === "admin" &&
      password === "VeePickles2025"
    ) {
      onLogin(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "100px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "10px"
    }}>
      <h2>Admin Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          background: "#d62828",
          color: "white",
          border: "none"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default AdminLogin;