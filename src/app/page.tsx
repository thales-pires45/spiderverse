import HeroesList from "./components/HeroList";
import { IHeroData } from "./interfaces/heroes";
import styles from "./page.module.scss";

//Faz uma requisição assincrona
async function getHeroesDate(): Promise<{ data: IHeroData[] }> {
  try {
    const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
    console.log("Response from fetch:", res);

    if (!res.ok) {
      console.error("Erro na requisição:", res.statusText);
      throw new Error("Falha ao solicitar a lista de heróis");
    }

    return res.json();
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    throw error;
  }
}

export default async function Home() {
  const heroes = await getHeroesDate();
  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
