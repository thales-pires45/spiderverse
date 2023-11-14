import Carousel from "@/app/components/Carousel";
import { IHeroData } from "@/app/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  try {
    const apiUrl =
      process.env.API_URL || "https://64a54c6300c3559aa9bf7245.mockapi.io";
    const url = `${apiUrl}/api/heroes`;

    // Adicione logs para depurar
    console.log("Fetching data from:", url);

    const res = await fetch(url);
    console.log("Response from fetch:", res);

    if (!res.ok) {
      console.error("Erro na requisição:", res.statusText);
      throw new Error("Falha ao solicitar a lista de heróis");
    }

    const responseData = await res.json();
    console.log("Response data:", responseData);

    return { data: responseData };
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    throw error;
  }
}

export default async function Hero({ params: { id } }: IProps) {
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes.data} activeId={id} />;
}
