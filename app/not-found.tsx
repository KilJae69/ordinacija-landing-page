import { FadeIn } from "@/components/shared/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" pt-[20rem] md:pt-32 pb-10  px-5">
      <FadeIn className="flex flex-1 flex-col items-center justify-center">
        <h2 className="text-3xl md:text-6xl leading-10 font-bold text-center mb-8 text-black">
          <span className="text-gradient-accent">404</span>
          <br />
          Nije pronađena
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Nažalost, nismo pronašli stranicu koju ste tražili
        </p>
        <Image
          src="/not-found-img.png"
          alt="doktor ukazuje da stranica nije pronađena"
          width={400}
          height={400}
        />
        <Link
          className="bg-primary-accent relative -translate-x-5 mt-3 text-white rounded-md px-5 py-2 text-xl font-semibold tracking-widest hover:opacity-50"
          href="/"
        >
          Nazad
        </Link>
      </FadeIn>
    </section>
  );
}
