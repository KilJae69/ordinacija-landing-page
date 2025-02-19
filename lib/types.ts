import { links } from "./data";
import { z } from "zod";

export type SectionName = (typeof links)[number]["name"];



export const contactFormSchema = () =>
    z.object({
      name: z
        .string()
        .trim()
        .max(100, { message: "Ime mora imati manje od 100 znakova." })
        .refine((value) => /^[a-zA-ZčćšđžČĆŠĐŽ\s]+$/.test(value), {
          message: "Vaše ime smije sadržavati samo slova.",
        }),
  
      email: z
        .string()
        .trim()
        .email({ message: "Nevažeća e-mail adresa." })
        .min(1, { message: "Ovo polje je obavezno."  })
        .max(100, { message: "E-mail mora imati manje od 100 znakova." }),
  
      phone: z
        .string()
        .trim()
        .max(20, { message: "Telefonski broj mora imati manje od 20 znakova." })
        .optional()
        .refine((value) => !value || /^[\d\s()+-]+$/.test(value), {
          message: "Nevažeći format telefonskog broja",
        }),
  
     
      message: z
        .string()
        .trim()
        .min(1, { message: "Ovo polje je obavezno." })
        .max(1000, { message: "Poruka mora imati manje od 1000 znakova." }),
    });
  
  export type TContactFormSchema = z.infer<ReturnType<typeof contactFormSchema>>;