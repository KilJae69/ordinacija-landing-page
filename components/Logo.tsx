import Image from "next/image";

export default function Logo() {
  return (
    <a href="#naslovna">
        <Image priority src="/ordinacija-logo.png" alt="logo ordinacije" width={160} height={70}/>
    </a>
  );
  
}