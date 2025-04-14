"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, TContactFormSchema } from "@/lib/types";
import clsx from "clsx";
import { sendEmailAction } from "@/lib/sendEmail.action";
import toast from "react-hot-toast";
import { FadeIn } from "./shared/FadeIn";

import SubmitButton from "./shared/SubmitButton";

function TextInput({
  label,
  errorMessage,
  name,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  name: string;
  errorMessage: string;
}) {
  console.log();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={name}
        name={name}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-6 pt-12  text-base/6 text-slate-800 ring-4 ring-transparent transition  focus:outline-none focus:ring-slate-800/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={name}
        className={clsx(
          "pointer-events-none absolute left-6 top-1/2 tracking-widest -mt-3 origin-left text-base/6 text-slate-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-800 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-800",
          errorMessage && "!text-rose-500"
        )}
      >
        {label}
      </label>
      <div className="absolute bottom-1 left-6">
        {errorMessage && (
          <p aria-live="polite" className="text-rose-500 text-xs">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
function TextareaInput({
  label,
  name,
  errorMessage,
  ...props
}: React.ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  name: string;
  errorMessage: string;
}) {
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={name}
        name={name}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-slate-800 ring-4 ring-transparent transition  focus:outline-none focus:ring-slate-800/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={name}
        className={clsx(
          "pointer-events-none absolute top-14 left-6 tracking-widest -mt-3 origin-left text-base/6 text-slate-500 transition-all duration-200 peer-focus:-translate-y-9 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-800 peer-[:not(:placeholder-shown)]:-translate-y-9 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-primary-800",
          errorMessage && "text-rose-500"
        )}
      >
        {label}
      </label>
      <div className="absolute bottom-1 left-6">
        {errorMessage && (
          <p aria-live="polite" className="text-rose-500 text-xs">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema()),
  });

  const onSubmit = async (data: TContactFormSchema) => {
    try {
      const response = await sendEmailAction(data);

      if (response.error) {
        toast.error(`Error:${response.error}`);
      } else {
        toast.success(`Poruka uspješno poslata`);
        reset();
      }
    } catch (error) {
      toast.error(`Neočekivan problem: ${error}. Molimo pokušajte kasnije. `);
    }
  };

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="isolate -space-y-px rounded-2xl bg-white/50">
          <TextInput
            {...register("name")}
            label="Ime i prezime*"
            placeholder="Ime i Prezime"
            name="name"
            autoComplete="name"
            errorMessage={errors.name?.message || ""}
          />
          <TextInput
            {...register("email")}
            label="Email*"
            type="email"
            name="email"
            autoComplete="email"
            errorMessage={errors.email?.message || ""}
          />

          <TextInput
            {...register("phone")}
            label="Telefon"
            type="tel"
            name="phone"
            autoComplete="tel"
            errorMessage={errors.phone?.message || ""}
          />
          <TextareaInput
            {...register("message")}
            label="Poruka*"
            name="message"
            errorMessage={errors.message?.message || ""}
          />
        </div>
        <div className="mt-7">
          <SubmitButton disabled={isSubmitting} />
        </div>
      </form>
    </FadeIn>
  );
}
