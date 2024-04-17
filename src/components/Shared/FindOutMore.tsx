import { RxCaretRight } from "react-icons/rx"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const FindOutMore = ({ className }: { className?: string }) => {
    const mergedClasses = twMerge(
        clsx(
            "w-full bg-transparent flex justify-center items-center my-5 text-base font-medium text-white gap-2",
            className
        )
    );

    return (
        <button className={mergedClasses}>

            <p>Find Out More</p><span><RxCaretRight className="text-xl bg-white text-black" /></span>

        </button>
    )
}

export default FindOutMore