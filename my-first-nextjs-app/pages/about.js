import Link from "next/link";
export default function About() {
  return (
    <>
      <h1>Welcome to the About page!!.</h1> 
      <p>This is the About page of the app..</p>
      <Link href="/">Go back home</Link>
    </>
  );
}