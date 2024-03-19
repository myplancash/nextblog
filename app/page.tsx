// Home.jsx
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center p-8 md:p-24 min-h-screen">
      <p className="mb-12 mt-12 text-3xl text-center dark:text-white">
        Hello and Welcome <span className="wave">👋🏻</span>&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Sergio</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
