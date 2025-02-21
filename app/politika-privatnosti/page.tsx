import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";

export default function PrivacyPage() {
  return (
    <section className="relative bg-gradient-to-r pb-52 from-white via-green-50 to-green-100 flex-1 size-full pt-52">
      <PageIntro
        page
        eyebrow="Politika privatnosti"
        title="Politika privatnosti OrdinacijaCMS"
      />
      <FadeIn className="px-4 max-w-2xl mx-auto space-y-6">
        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            1. Uvod
          </h2>
          <p>
            Ova Politika privatnosti objašnjava kako OrdinacijaCMS, u vlasništvu Adija Toromanovića
            (&quot;mi&quot;, &quot;nas&quot;, &quot;naše&quot;), prikuplja, koristi i štiti vaše podatke prilikom
            korištenja naše platforme. Korištenjem OrdinacijaCMS-a, slažete se s uvjetima ove
            politike.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            2. Vrste podataka koje prikupljamo
          </h2>
          <p>Prikupljamo sljedeće vrste podataka:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Podaci korisničkog računa:</strong> Ime, prezime, e-mail adresa i broj telefona.
            </li>
            <li>
              <strong>Podaci o plaćanju:</strong> Obraduje ih Paddle; OrdinacijaCMS ne pohranjuje podatke o plaćanju.
            </li>
            <li>
              <strong>Podaci o pacijentima (uneseni od strane korisnika):</strong> Ime, prezime, e-mail, broj telefona, 
              adresa, godište, spol, alergije i krvna grupa.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            3. Kako koristimo vaše podatke
          </h2>
          <p>Prikupljene podatke koristimo isključivo za sljedeće svrhe:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Omogućavanje pristupa i korištenja SaaS platforme.</li>
            <li>Obradu plaćanja putem Paddle-a.</li>
            <li>Slanje važnih obavijesti putem Resend-a.</li>
            <li>Sigurno pohranjivanje medicinskih zapisa i omogućavanje pristupa korisnicima.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            4. Dijeljenje podataka s trećim stranama
          </h2>
          <p>Vaše podatke dijelimo isključivo s pouzdanim trećim stranama koje su neophodne za funkcionisanje platforme:</p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Paddle:</strong> Obrada plaćanja.</li>
            <li><strong>Resend:</strong> Upravljanje e-mail komunikacijom.</li>
            <li><strong>Hetzner:</strong> Hosting svih podataka i servera aplikacije.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            5. Kolačići i analitika
          </h2>
          <p>Trenutno OrdinacijaCMS ne koristi kolačiće. U budućnosti planiramo integrirati Google Analytics radi analize korištenja usluga.</p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            6. Pohrana i sigurnost podataka
          </h2>
          <p>Vaši podaci su sigurni i pohranjuju se uz najviše sigurnosne standarde:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Svi korisnički i pacijentski podaci pohranjeni su na sigurnim Hetzner serverima.</li>
            <li>Podaci se čuvaju dok god korisnik ima aktivan račun.</li>
            <li>Deaktivacijom računa, svi povezani podaci, uključujući medicinske zapise, trajno se brišu.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            7. Prava korisnika
          </h2>
          <p>Korisnici OrdinacijaCMS-a imaju sljedeća prava:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Pravo na pristup, ažuriranje i brisanje svojih podataka.</li>
            <li>Mogućnost izvoza pacijentovih podataka u CSV formatu prije deaktivacije računa.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-black dark:text-white mb-2">
            8. Kontakt informacije
          </h2>
          <p>
            Za sva pitanja vezana za zaštitu privatnosti ili zahtjeve u vezi s podacima, možete nas kontaktirati putem emaila,{" "}
            <a
              href="mailto:info@spark-dev-studio.com"
              className="text-primary-accent"
            >
              info@spark-dev-studio.com
            </a>
            .
          </p>
        </section>
      </FadeIn>
    </section>
  );
}
