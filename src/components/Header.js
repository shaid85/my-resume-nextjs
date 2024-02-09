import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className=" absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
              {/* logo */}
              <Link href={'/'}>
                <Image
                  src={'/logoname.png'}
                  width={220} 
                  height={48}
                  alt=""
                  priority={true}
                />  
              </Link>
              {/* socials */}
              <Socials />
              {/* <ThemeToggler /> */}
            </div>
        </div>
    </header>
  )
};

export default Header;
