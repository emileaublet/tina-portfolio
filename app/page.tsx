import { Link } from "@/components/link";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <>
      <main className="container">
        <header className="md:grid md:grid-cols-7">
          <Image
            src="/jeffrey.png"
            alt="Jeffrey Julio-Vietz"
            width={400}
            height={400}
            className="mx-auto col-span-3 w-full md:ml-auto md:mr-0"
          />
          <div className="col-span-4 xl:col-span-4 md:mt-6 lg:mt-10 xl:mt-16">
            <Balancer
              as="h1"
              className="text-primary-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[98%] block"
            >
              Jeffrey Julio-Vietz
            </Balancer>
            <Balancer
              as="p"
              className="text-2xl md:text-2xl xl:text-3xl font-normal mt-2 md:mt-4 xl:mt-6"
            >
              Experienced UX leader crafting intuitive, user-centered digital
              solutions.
            </Balancer>
            <Balancer
              as="p"
              className="mt-8 text-xl text-neutral-600 dark:text-neutral-400"
            >
              With over 18 years in UX and design, I bring a mix of strategy,
              creativity, and technical expertise to craft impactful,
              user-centered solutions. I’m passionate about mentoring teams,
              leading with empathy, and building intuitive systems that balance
              user needs with business goals.
            </Balancer>
            <Link
              href="https://www.linkedin.com/in/jeffreyvietz/"
              className="text-primary-500 text-lg mt-8"
            >
              <span>Contact me</span>
            </Link>
          </div>
        </header>
      </main>
      <Projects />
      <Resume />
    </>
  );
}
