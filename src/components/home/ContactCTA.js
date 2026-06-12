import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="py-10"
      style={{ background: "#0C2D55" }}
    >
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <h3 className="text-xl md:text-2xl text-white font-bold">
          Ready to start your project?
        </h3>

        <Link
          href="/contact"
          className="btn-outline-white"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}