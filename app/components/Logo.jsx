import Link from "next/link";
import Image from "next/image";
export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.jpg" width={54} height={54} priority alt="" />
    </Link>
  );
};
