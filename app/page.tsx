import { FiUsers, FiCode } from 'react-icons/fi';
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center p-8 md:p-24 min-h-screen">
      <h1 className="text-5xl md:text-6xl text-center font-bold mb-12 mt-12 text-primary dark:text-white">
        Welcome to <span className="text-accent whitespace-nowrap">Tech Insight</span> <FiCode className="inline-block text-3xl md:text-4xl text-accent" /><br/> 
        <br className="md:hidden" /> For Tech Enthusiasts <FiUsers className="inline-block text-3xl md:text-4xl text-accent" />
      </h1>
      <Posts />
    </main>
  );
}