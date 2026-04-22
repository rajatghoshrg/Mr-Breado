import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div style={{ background: "#FFF7ED" }} className="min-h-screen flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

    
        <h1 style={{ color: "#F97316" }} className="text-2xl font-bold text-center">
          🍞 Mr. Breado
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Create your account
        </p>

        
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-md"
          />

          <button
            style={{ background: "#F97316" }}
            className="w-full text-white py-2 rounded-md"
            onMouseOver={(e) => (e.target.style.background = "#EA580C")}
            onMouseOut={(e) => (e.target.style.background = "#F97316")}
          >
            Register
          </button>
        </form>

        
        <div className="text-center mt-4 text-sm">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#EF4444" }}
              onMouseOver={(e) => (e.target.style.color = "#DC2626")}
              onMouseOut={(e) => (e.target.style.color = "#EF4444")}
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;