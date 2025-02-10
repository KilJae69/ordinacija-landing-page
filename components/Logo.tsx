import Image from "next/image";

export default function Logo({src,width,height}:{src?:string;width?:number;height?:number;}) {
  return (
    <a href="#naslovna">
        <Image priority src={src ? src : "/ordinacija-logo.png"} alt="logo ordinacije" width={width? width : 160} height={height ? height : 70}/>
    </a>
  );
  
}