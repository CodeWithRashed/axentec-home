import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const SectionTitle = ({ className, title, subtitle }: { className?: string, title: string, subtitle?: string }) => {
  const mergedClasses = twMerge(
    clsx(
      "w-full bg-transparent flex justify-center items-center text-3xl font-bold text-white",
      className
    )
  );

  return (
    <div className={mergedClasses}>
      {
        subtitle && <p className="text-base">{subtitle}</p>
      }

      <h1>{title}</h1>

    </div>
  )
}

export default SectionTitle