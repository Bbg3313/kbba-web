import Image from "next/image";

function StepPhotoVisual({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[4.25rem] overflow-hidden rounded-2xl border border-rose-100/90 bg-white shadow-sm shadow-rose-100/30 sm:max-w-[5.5rem]">
      <div className="relative aspect-[4/5] w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" sizes="88px" />
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Register",
    desc: "Fill the form or contact our team.",
    imageSrc: "/images/reviews/gallery/consultation-room.png",
    imageAlt: "Consultation room for registration enquiries",
  },
  {
    n: "02",
    title: "Contract & training",
    desc: "Complete the agreed onboarding steps.",
    imageSrc: "/images/reviews/gallery/certificate.png",
    imageAlt: "Training and certificate materials",
  },
  {
    n: "03",
    title: "Launch your agency",
    desc: "Ongoing support after you graduate.",
    imageSrc: "/images/reviews/gallery/note-group.png",
    imageAlt: "Team launch and partner support moment",
  },
] as const;

type RegisterStepsCardsProps = {
  gridClassName: string;
  cardClassName: string;
};

export function RegisterStepsCards({ gridClassName, cardClassName }: RegisterStepsCardsProps) {
  return (
    <div className={gridClassName}>
      {steps.map(({ n, title, desc, imageSrc, imageAlt }) => (
        <div key={n} className={cardClassName}>
          <StepPhotoVisual imageSrc={imageSrc} imageAlt={imageAlt} />
          <p className="font-display mt-2 text-2xl font-semibold text-pink-600 sm:mt-4 sm:text-[2rem]">{n}</p>
          <h3 className="font-display mt-1 min-h-[1.8rem] text-pretty text-[0.82rem] font-semibold leading-snug text-rose-950 sm:min-h-[2.75rem] sm:text-lg">
            {title}
          </h3>
          <p className="mt-1.5 min-h-[3.1rem] text-pretty text-[0.68rem] leading-relaxed text-rose-900/75 sm:mt-2 sm:min-h-0 sm:text-sm">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
