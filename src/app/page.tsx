import HeroesList from "./components/HeroList";
import { IHeroData } from "./interfaces/heroes";
import styles from "./page.module.scss";

//Faz uma requisição assincrona
async function getHeroesDate(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
  console.log("Response from fetch:", res);

  //Caso não retorne a função
  if (!res.ok) {
    throw new Error("Falid to request heores list");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesDate();
  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
