import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return (
    <section className="h-80 border border-solid border-black bg-lime-400 p-4">
      {children}
    </section>
  );
}
