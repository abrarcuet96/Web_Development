import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error();
  return (
    <div>
      <h1>Hello World Joy</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default HomePage;