import Logo from "./Logo";
import TermsPrivacyModal from "./shared/TermsPrivacyModal";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr bg-primary-accent py-10 px-4">
      <div className="md:container md:mx-auto ">
        <div className="border-b border-dashed flex flex-col sm:flex-row gap-2 items-center justify-between py-2">
          <Logo src="/ordinacija-logo-white.svg" width={200} height={100} />
          <TermsPrivacyModal />
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
