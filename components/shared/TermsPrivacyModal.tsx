"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,

  ModalTrigger,
} from "../ui/animated-modal";


export default function TermsPrivacyModal() {
  return (
    <Modal>
      <ModalTrigger className="bg-white text-sm text-black  hover:text-primary-accent flex justify-center group/modal-btn">
        <span className=" text-center">
          Uslovi korištenja i politika privatnosti
        </span>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
            Uslovi korištenja i politika privatnosti
          </h4>

          <div className="overflow-y-auto max-h-[60vh] py-5 sm:px-4 space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
            <section>
              <h5 className="font-semibold text-lg text-black dark:text-white mb-2">
                1. Uslovi korištenja
              </h5>
              <p>
                Dobrodošli na <strong className="text-gradient-accent">OrdinacijaCMS</strong>! Korištenjem naše
                web stranice i aplikacije prihvatate ove uslove korištenja.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>OrdinacijaCMS je namijenjena isključivo doktorima.</li>
                <li>
                  Svi podaci unijeti u sistem služe isključivo potrebama
                  doktora.
                </li>
                <li>Korisnici su odgovorni za sigurnost svojih naloga.</li>
              </ul>
            </section>

            <section>
              <h5 className="font-semibold text-lg text-black dark:text-white mb-2">
                2. Politika privatnosti
              </h5>
              <p>
                Vaša privatnost nam je važna. OrdinacijaCMS ne prikuplja više
                podataka nego što je potrebno za rad aplikacije.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Svi podaci su pohranjeni na sigurnim serverima.</li>
                <li>
                  Podaci pacijenata su dostupni isključivo doktoru koji ih je
                  unio.
                </li>
                <li>Ne dijelimo podatke s trećim stranama.</li>
              </ul>
            </section>

            <section>
              <h5 className="font-semibold text-lg text-black dark:text-white mb-2">
                3. Izmjene uslova i privatnosti
              </h5>
              <p>
                Zadržavamo pravo izmjene ovih uslova. Sve promjene će biti
                objavljene na web stranici i aplikaciji.
              </p>
            </section>

            <p className="text-xs text-neutral-500 mt-4">
              Ako imate bilo kakva pitanja, kontaktirajte nas putem <a href="mailto:spark.studio.dev@gmail.com" className="text-primary-accent">emaila</a> .
            </p>
          </div>
        </ModalContent>
        {/* <ModalFooter className="gap-4 flex items-center justify-center bg-primary-accent">
         <Logo src="/ordinacija-logo-white.svg"/>
        </ModalFooter> */}
      </ModalBody>
    </Modal>
  );
}
