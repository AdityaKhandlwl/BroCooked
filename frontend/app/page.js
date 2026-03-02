import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="pt-32 pb-20 px-4">
        <Button variant="primary" size="xl">
          Subscribe to RoadsideCoder
        </Button>
      </section>
    </div>
  );
}
