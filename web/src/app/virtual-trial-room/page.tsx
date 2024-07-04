import Canvas from "./Canvas";
import Products from "./Products";

export default function VirtualTrialRoom() {
  return (
    <section className="grid lg:grid-cols-2 gap-8">
      <Canvas />
      <Products />
    </section>
  );
}
