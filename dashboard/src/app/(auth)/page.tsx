import Form from "./Form";

export default function SignIn() {
  return (
    <main className="min-h-screen flex items-center">
      <section className="w-full py-24">
        <div className="mx-auto container px-8">
          <h1 className="mb-2 text-3xl font-extrabold text-center">
            Welcome, back!
          </h1>

          <p className="mb-8 text-center text-muted-foreground">
            Enter your credentials below to sign in
          </p>

          <Form />
        </div>
      </section>
    </main>
  );
}
