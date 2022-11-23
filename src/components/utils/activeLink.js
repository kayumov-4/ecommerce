import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ href, content }) {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a
        className={`p-4 ${
          href === asPath && "text-white bg-[#384685] rounded text-[20px]"
        }`}
      >
        {content}
      </a>
    </Link>
  );
}

export default ActiveLink;
