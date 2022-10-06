import React from "react";

function LoginRegister() {
  return (
    <div className="flex items-center font-medium">
      <a href="#" className="hover:text-blue transition-all">
        Login
      </a>
      <span className="mx-6 text-white/20">|</span>
      <button className="btn px-8 h-[40px]">Register</button>
    </div>
  );
}

export default LoginRegister;
