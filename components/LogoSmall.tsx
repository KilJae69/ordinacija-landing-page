import Image from "next/image";

export default function LogoSmall({src,width,height,className}:{src?:string;width?:number;height?:number;className?:string}) {
  return (
    <a href="#naslovna" className={className}>
        <Image priority src={src ? src : "/small-ordinacija-logo.png"} alt="logo ordinacije" width={width? width : 160} height={height ? height : 70}/>
    </a>
  );
  
}