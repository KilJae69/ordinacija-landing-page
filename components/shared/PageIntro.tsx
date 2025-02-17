import { FadeIn } from "./FadeIn";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  paragraph?: string;
  page?: boolean;
};

export default function PageIntro({
  eyebrow,
  title,
  paragraph,
  page = false,
}: PageIntroProps) {
  return (
    <FadeIn className="container flex flex-col mx-auto px-4">
      <span className="mx-auto mb-4 tracking-widest font-semibold text-primary-accent bg-primary-accent/20 rounded-3xl px-2 py-1">
        {eyebrow}
      </span>
      {page ? (
        <h1 className="text-3xl md:text-4xl leading-10 font-bold text-center mb-8 text-black">
          {title}
        </h1>
      ) : (
        <h2 className="text-3xl md:text-4xl leading-10 font-bold text-center mb-8 text-black">
          {title}
        </h2>
      )}

      <p className="text-center text-lg text-gray-600 mb-12">{paragraph}</p>
    </FadeIn>
  );
}
