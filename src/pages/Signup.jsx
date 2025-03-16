import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://673842654eb22e24fca7564c.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Successfully registered!");
      } else {
        setMessage(data.message || "Registration error");
      }
    } catch (error) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[100px] pb-[50px] flex flex-col items-center justify-start bg-[#FFFCF6]">
      <div className="bg-[#FFFCF6] flex flex-col items-center justify-center gap-[50px] px-[300px] py-[50px] border border-[#FCD043] border-[2px] rounded-[20px]">
        <h2 className="text-[80px] text-[#1B3B36] font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-[30px]">
          <input
            type="text"
            name="username"
            placeholder="Enter the username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-[400px] px-[10px] py-[15px] border border-[#1B3B36] rounded-[10px] text-[16px] text-[#1B3B36]"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[400px] px-[10px] py-[15px] border border-[#1B3B36] rounded-[10px] text-[16px] text-[#1B3B36]"
          />
          <input
            type="password"
            name="password"
            placeholder="Passowrd"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-[400px] px-[10px] py-[15px] border border-[#1B3B36] rounded-[10px] text-[16px] text-[#1B3B36]"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-[400px] bg-[#FCD043] border-none text-[#1B3B36] py-[15px] rounded-[10px] text-[16px] text-[#1B3B36] hover:bg-[#FFFCF6] transition"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        {message && <p className="text-center text-[#1B3B36] text-[18px]">{message}</p>}
      </div>
    </div>
  );
}

// git add .
// git commit -m "твое сообщение"
// git push