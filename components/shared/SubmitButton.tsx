"use client";

import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton({disabled=false}:{disabled:boolean}) {
 
  return (
    <button
      type="submit"
      className="group flex items-center borderBlack justify-center gap-2 h-[3rem] w-[8rem] bg-primary-accent text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105 disabled:scale-100 disabled:bg-opacity-65 "
      disabled={disabled}
    >
      {disabled ? (
        <div className="size-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          Pošalji
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
