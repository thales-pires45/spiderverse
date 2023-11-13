import Carousel from "@/app/components/Carousel";
import { IHeroData } from "@/app/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  //Caso não retorne a função
  if (!res.ok) {
    throw new Error("Falid to request heores list");
  }

  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes.data} activeId={id} />;
}
