import Banner from "@/components/ui/banner";
import Nosotros from "@/components/ui/nosotros";
export const metadata = {
  title: "font-dita",
  description: "Tu fondita de fuentes preferencia",
  keywords: ["Type", "Typography", "Tipografía", "Type Design"],
  openGraph: {
    title: "Font-dita",
    description: "Tu fondita de fuentes preferencia",
    type: "article",
    publishedTime: "2024-03-01T00:00:00.000Z",
    authors: ["Miguel Angel Contreras"],
  },
};
export default function Home() {
  return (
    <main className="container">
      <h1 className="text-primary text-7xl mb-4 text-center">
        Bienvenido a Fontdita
      </h1>
      <Nosotros />
      <Banner />
    </main>
  );
}
