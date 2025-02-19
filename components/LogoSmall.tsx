import Image from "next/image";
import Link from "next/link";

export default function LogoSmall({src,width,height,className}:{src?:string;width?:number;height?:number;className?:string}) {
  return (
    <Link href="/" className={className}>
        <Image priority src={src ? src : "/small-ordinacija-logo.png"} alt="logo ordinacije" width={width? width : 160} height={height ? height : 70}/>
    </Link>
  );
  
}