import Link from "next/link";

function AboutMe() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Me</Link>
      </li>
      <li>
        Accede{" "}
        <Link href="https://bralo.com/tuercas-remachables/esparragos/esparragos-remachables/">
          c
        </Link>
      </li>
    </ul>
  );
}

export default AboutMe;
