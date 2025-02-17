import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";

export default function PrivacyPage() {
  return (
    <section className="relative bg-gradient-to-r pb-52 from-white via-green-50 to-green-100 flex-1 size-full pt-52">
      <PageIntro
      page
        eyebrow="Politika privatnosti"
        title="Politika privatnosti za Ordinacija CMS"
      />
      <FadeIn className=" max-w-2xl mx-auto space-y-6">
        <section>
          <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
            1. Uslovi korištenja
          </h3>
          <p>
            Dobrodošli na{" "}
            <strong className="text-gradient-accent">OrdinacijaCMS</strong>!
            Korištenjem naše web stranice i aplikacije prihvatate ove uslove
            korištenja.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>OrdinacijaCMS je namijenjena isključivo doktorima.</li>
            <li>
              Svi podaci unijeti u sistem služe isključivo potrebama doktora.
            </li>
            <li>Korisnici su odgovorni za sigurnost svojih naloga.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
            2. Politika privatnosti
          </h3>
          <p>
            Vaša privatnost nam je važna. OrdinacijaCMS ne prikuplja više
            podataka nego što je potrebno za rad aplikacije.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Svi podaci su pohranjeni na sigurnim serverima.</li>
            <li>
              Podaci pacijenata su dostupni isključivo doktoru koji ih je unio.
            </li>
            <li>Ne dijelimo podatke s trećim stranama.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
            3. Izmjene uslova i privatnosti
          </h3>
          <p>
            Zadržavamo pravo izmjene ovih uslova. Sve promjene će biti
            objavljene na web stranici i aplikaciji.
          </p>
        </section>

        <p className="text-xs text-neutral-500 mt-4">
          Ako imate bilo kakva pitanja, kontaktirajte nas putem{" "}
          <a
            href="mailto:spark.studio.dev@gmail.com"
            className="text-primary-accent"
          >
            emaila
          </a>{" "}
          .
        </p>
      </FadeIn>
    </section>
  );
}
