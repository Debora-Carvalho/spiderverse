import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
}

export default async function Hero({ params }: { params: { id: string } }) {
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes.data} activeId={params.id} />;
}
