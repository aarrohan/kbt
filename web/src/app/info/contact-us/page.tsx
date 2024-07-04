import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us - KBT",
};

export default function TermsAndConditions() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        Contact us
      </h1>

      <p className="mb-14 max-w-[950px] text-sm text-dark">
        We're happy to answer any questions you have or provide you with an
        estimate. Just send us a message in the form below with any questions
        you may have.
      </p>

      <form className="max-w-[750px] space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            required
            className="h-[50px] px-5 border border-transparent focus:border-dark bg-foreground-2 text-sm text-dark duration-300"
          />

          <input
            type="text"
            placeholder="Last name"
            required
            className="h-[50px] px-5 border border-transparent focus:border-dark bg-foreground-2 text-sm text-dark duration-300"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email address"
            required
            className="h-[50px] px-5 border border-transparent focus:border-dark bg-foreground-2 text-sm text-dark duration-300"
          />

          <input
            type="tel"
            placeholder="Phone number"
            required
            className="h-[50px] px-5 border border-transparent focus:border-dark bg-foreground-2 text-sm text-dark duration-300"
          />
        </div>

        <textarea
          placeholder="Tell us, what's going on?"
          required
          className="w-full h-[185px] resize-none p-5 border border-transparent focus:border-dark bg-foreground-2 text-sm text-dark duration-300"
        ></textarea>

        <button className="h-[50px] px-8 border border-transparent hover:border-white bg-dark text-xs font-bold uppercase tracking-[1.5px] text-white duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}
