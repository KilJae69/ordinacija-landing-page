"use client";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./shared/Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// import TermsPrivacyModal from "./shared/TermsPrivacyModal";

export default function Footer() {
  const path = usePathname();
  
  return (
    <footer className={clsx("bg-slate-800 relative flex flex-col  px-4 py-10",`${path !== "/kontakt" && "min-h-[500px] md:min-h-[400px]"}`)}>
      {/* Floating Contact Box */}

      {path !== "/kontakt" ? (
        <div className="bg-gradient-accent absolute text-center py-[90px] -top-1/3 left-1/2 -translate-x-1/2 shadow-md rounded-lg text-white md:max-w-3xl w-full max-w-[90%] px-4 flex flex-col items-center justify-center mx-auto">
          <div className="max-w-xl mx-auto flex justify-center items-center flex-col px-2 gap-6">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-wider">
              Niste pronašli odgovor na pitanje koje vas zanima?
            </h3>
            <p className="text-lg">
              Slobodno nas kontaktirajte u vezi bilo kojeg upita
            </p>
            <Button href="/kontakt" className="w-fit" invert>
              Kontaktirajte nas
            </Button>
          </div>
        </div>
      ) : null}

      {/* Main Footer Content (Pushed to Bottom) */}
      <div className="flex flex-col pt-22 flex-1 justify-end md:container md:mx-auto">
        <div className="border-b border-dashed text-white flex flex-col sm:flex-row gap-2 items-center justify-between py-2">
          <Logo src="/ordinacija-logo-white.svg" width={200} height={100} />
          {/* <TermsPrivacyModal /> */}
          <div className="space-x-2 text-sm">
            <Link className="hover:underline" href="/politika-privatnosti">
              Politika privatnosti
            </Link>
            <Link className="hover:underline" href="/uslovi-koristenja">
              Uslovi korištenja
            </Link>
          </div>
        </div>

        <div className="text-white flex flex-col sm:flex-row w-full gap-1 justify-between text-xs py-2">
          <p>© 2025 OrdinacijaCMS. Sva prava zadržana.</p>
          <p>
            Web stranicu i aplikaciju razvio i održava{" "}
            <a
              target="__blank"
              rel="noopener noreferrer"
              href="https://spark-dev-studio.com/"
              className="underline"
            >
              <span className="text-yellow-500">Spark</span>Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
