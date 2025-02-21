import type React from "react";
import { ChevronRightIcon } from "../../../icons";

interface NavigationTileProps {
  text: string;
  link: string;
  className?: string;
}

const NavigationTile: React.FC<NavigationTileProps> = ({ text, link, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 ${className}`}>
      {/* <!-- Navigation Tile Start --> */}
      <a
        href={link} // Use the link prop for the anchor tag
        className="flex items-end gap-5 cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 hover:shadow-xl transition-shadow"
      >
        <div className="pt-14 flex items-center justify-between mt-5">
          <h4 className="font-bold text-gray-800 text-3xl dark:text-white/90">
            {text} {/* Use the text prop for the title */}
          </h4>
        </div>

        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ChevronRightIcon className="text-gray-800 size-6 dark:text-white/90 flex" />
        </div>
      </a>
      {/* <!-- Navigation Tile End --> */}
    </div>
  );
};

export default NavigationTile;
