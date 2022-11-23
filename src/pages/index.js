import Main from "../components/main";
import Layout from "../components/layout";
import Slider from "../components/swiper";
import Works from "../components/works";
import Location from "../components/location";
import { useRouter } from "next/router";

export default function Home({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <>
      <Layout title={"Home"}>
        <div className="px-6 max-w-screen-2xl mx-auto">
          <Slider />
          <Main products={data} />
          <Works />
          <Location />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
