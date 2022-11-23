import Link from "next/link";
import { useRouter } from "next/router";

function ModelsActiveLink({ href, content }) {
  const { asPath } = useRouter();
  return (
    <>
      <Link href={href}>
        <a
          className={`p-4 ${
            href === asPath && "text-[#384685] rounded text-[20px]"
          }`}
        >
          {content}
        </a>
      </Link>
    </>
  );
}

export default ModelsActiveLink;
