import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    checkin: "",
    checkout: "",
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
        setMessage("We sent the message to your E-mail!");
      } else {
        setMessage(data.message || "Error! Try later");
      }
    } catch (error) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:pt-[70px] pb-[20px] flex flex-col items-center justify-start bg-[#FFFCF6]">
      <div className="w-[330px] lg:bg-[#FFFCF6] flex flex-col items-center justify-center gap-[50px] px-[300px] py-[50px] border border-[#FCD043] border-[2px] rounded-[20px]">
        <h2 className="text-[#1B3B36] text-[40px] lg:text-[80px] font-bold text-center">Find room</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-[30px]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[300px] px-[10px] py-[15px] border border-[#1B3B36] rounded-[10px] text-[16px] text-[#1B3B36] lg:w-[400px]"
          />
          <input
            type="text"
            name="checkin"
            placeholder="Check-in date"
            value={formData.checkin}
            onChange={handleChange}
            required
            className="w-[300px] px-[10px] py-[15px] border border-[#1B3B36] rounded-[10px] text-[16px] text-[#1B3B36] lg:w-[400px]"
          />
          <input
            type="text"
            name="checkout"
            placeholder="Check-out date"
            value={formData.checkout}
            onChange={handleChange}
            required
            className="w-[300px] px-[10px] py-[15px] border border-[#1B3B36] rounded-[10px] text-[16px] text-[#1B3B36] lg:w-[400px]"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-[300px] bg-[#FCD043] border border-[1px] border-[#FCD043] text-[#1B3B36] py-[15px] rounded-[10px] text-[16px] text-[#1B3B36] hover:bg-[#FFFCF6] transition lg:w-[400px]"
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
        {message && <p className="text-center text-[#1B3B36] text-[18px]">{message}</p>}
      </div>
    </div>
  );
}