import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import { LogoAPI } from "@/app/(home)/_components/icons";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      {/* <Image
        src={}
        fill
        className="dark:hidden"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      /> */}
      <LogoAPI className="dark:hidden" />

      {/* <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      /> */}

      
    </div>
  );
}
