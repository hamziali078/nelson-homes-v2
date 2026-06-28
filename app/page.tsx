import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center gap-4">
      <Button>Book Consultation</Button>

      <Button variant="outline">
        View Projects
      </Button>

      <Button variant="secondary">
        Learn More
      </Button>
    </main>
  );
}