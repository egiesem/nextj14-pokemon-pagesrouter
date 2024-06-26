// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import CardComponent from "@/components/cardComponent";

type Repo = {
  results: any;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
  );
  const data: Repo = await res.json();
  // Pass data to the page via props

  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Repo }>;

export default function IndexPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "violet" })}>Pokemon App</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern Pokemon App.
          </h2>
        </div>
      </section>
      <CardComponent data={data} />
    </DefaultLayout>
  );
}
