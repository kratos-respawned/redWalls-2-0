import React, { useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
function GotoTop() {
  useEffect(() => {
    let mounted = true;
    let setVisibility = () => {
      if (window.scrollY > 100) {
        document.querySelector("button.enter")?.classList.add("show");
      } else {
        document.querySelector("button.enter")?.classList.remove("show");
      }
    };
    if (mounted) {
      window.addEventListener("scroll", setVisibility);
    }
    return () => {
      mounted = false;
      window.removeEventListener("scroll", setVisibility);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      title="Go to top"
      className="z-[999] opacity-0 pointer-events-none fixed bottom-4 right-3 p-2 rounded-xl shadow-md shadow-black enter  duration-150 hover:scale-[1.05] bg-white"
    >
      <BiUpArrowAlt className="text-red-500 text-3xl" />
    </button>
  );
}

export default GotoTop;
