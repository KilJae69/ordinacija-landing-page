import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";

export default function TermsPage() {
  return (
    <section className="relative bg-gradient-to-r pb-52 from-white via-green-50 to-green-100 flex-1 size-full pt-52">
      <PageIntro
        page
        eyebrow="Uslovi korištenja"
        title="Uslovi korištenja za OrdinacijaCMS"
      />
      <FadeIn className="max-w-2xl mx-auto space-y-6">
        
        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            1. Uvod
          </h2>
          <p>
            Dobrodošli na <strong className="text-gradient-accent">OrdinacijaCMS</strong>, SaaS platformu namijenjenu medicinskim praksama. 
            Korištenjem naše platforme prihvatate ove uslove korištenja. Ako se ne slažete s njima, molimo vas da ne koristite našu uslugu.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            2. Registracija i korisnički nalozi
          </h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Aplikaciju može koristiti svako ko se registrira, ali je prvenstveno namijenjena medicinskim praksama.</li>
            <li>Ne zahtijevamo validaciju unesenih podataka prilikom registracije.</li>
            <li>Podaci unijeti u aplikaciju koriste se za generisanje zaglavlja medicinskih dokumenata (nalozi, mišljenja, postavke privatne prakse).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            3. Pretplate i plaćanja
          </h2>
          <ul className="list-disc pl-5 mt-2">
            <li>OrdinacijaCMS nudi <strong>30 dana besplatnog probnog perioda</strong>.</li>
            <li>Nakon probnog perioda, aplikacija se zaključava dok se ne izvrši uplata.</li>
            <li>Povrat novca je moguć samo ako aplikacija nije bila funkcionalna tokom trajanja pretplate.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            4. Dozvoljena i zabranjena upotreba
          </h2>
          <p>Korisnicima je **dozvoljeno**:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Koristiti aplikaciju u skladu sa važećim zakonima i propisima.</li>
            <li>Čuvati i obrađivati podatke pacijenata u okviru medicinske prakse.</li>
          </ul>
          <p className="mt-4">Korisnicima je <strong>zabranjeno</strong>:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Koristiti platformu u svrhe koje nisu povezane s medicinskom praksom.</li>
            <li>Dijeliti ili prodavati podatke pacijenata trećim stranama bez njihovog pristanka.</li>
            <li>Koristiti sistem za bilo kakve nezakonite, obmanjujuće ili zlonamjerne aktivnosti.</li>
            <li>Pokušavati neovlašteni pristup aplikaciji, serverima ili podacima drugih korisnika.</li>
            <li>Omalovažavati, vrijeđati ili na bilo koji način ugrožavati druge korisnike platforme.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            5. Ograničenje odgovornosti
          </h2>
          <p>
            OrdinacijaCMS se pruža <strong>„kakav jeste”</strong> bez ikakvih garancija. 
            Ne garantujemo neprekidan rad aplikacije niti preuzimamo odgovornost za eventualne prekide u radu, gubitak podataka ili poslovni gubitak nastao korištenjem aplikacije.
            Korisnik preuzima punu odgovornost za podatke koje unosi i način korištenja aplikacije.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            6. Prekid usluge i deaktivacija naloga
          </h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Korisnici mogu <strong>samostalno deaktivirati</strong> svoj nalog u bilo kojem trenutku.</li>
            <li>OrdinacijaCMS može suspendovati ili trajno deaktivirati nalog ako korisnik krši ove Uslove korištenja.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            7. Promjene Uslova korištenja
          </h2>
          <p>
            Zadržavamo pravo izmjene ovih uslova. Sve promjene će biti objavljene na zvaničnoj stranici OrdinacijaCMS-a. 
            Nastavak korištenja aplikacije nakon promjena znači da prihvatate nove uslove.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            8. Kontakt informacije
          </h2>
          <p>
            Za sva pitanja i informacije u vezi s Uslovima korištenja, možete nas kontaktirati putem{" "}
            <a
              href="mailto:info@spark-dev-studio.com"
              className="text-primary-accent"
            >
              emaila
            </a>
            .
          </p>
        </section>

      </FadeIn>
    </section>
  );
}
