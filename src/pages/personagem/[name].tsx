import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  Container,
  Content,
  ContentHeader,
  ContainerMidia,
  MidiaBox
} from "@/styles/pages/PersonagemStyles";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";

import api from "@/services/api";
import { Loading } from "@/components/Loading";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Series {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Events {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface PersonagemProps {
  character: Character;
  comics: Comic[];
  series: Series[];
  events: Events[];
}

export default function Personagem({ character, comics, series, events }: PersonagemProps) {
  const router = useRouter();

  // Caso os dados da página não estejam prontos
  if (router.isFallback) {
    return (
      <>
        <Header />

        <Container>
          <Content>
            <Loading />
          </Content>
        </Container>

        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Personagens Marvel | ${character.name}`} shouldExludeTitleSuffix
        description="Página que utiliza API da Marvel para consulta dos seus personagens."
      />

      <Header />

      <Container>
        <Content>
          <ContentHeader>
            <img
              src={`${character.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${character.thumbnail.extension}`}
              alt={character.name}
            />

            <div>
              <h1>{character.name}</h1>
              <p>{character.description}</p>
            </div>
          </ContentHeader>

          <h2>Comics</h2>
          <ContainerMidia>
            {comics.map(comic => (
              <MidiaBox key={comic.id}>
                <header>
                  <img
                    src={`${comic.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </header>

                <div>
                  <h3>
                    {comic.title}
                  </h3>

                  <p>
                    {comic.description}
                  </p>
                </div>
              </MidiaBox>
            ))}
          </ContainerMidia>

          {series.length > 0 && (
            <h2>Series</h2>
          )}
          <ContainerMidia>
            {series.map(serie => (
              <MidiaBox key={serie.id}>
                <header>
                  <img
                    src={`${serie.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${serie.thumbnail.extension}`}
                    alt={serie.title}
                  />
                </header>

                <div>
                  <h3>
                    {serie.title}
                  </h3>

                  <p>
                    {serie.description}
                  </p>
                </div>
              </MidiaBox>
            ))}
          </ContainerMidia>

          {events.length > 0 && (
            <h2>Events</h2>
          )}
          <ContainerMidia>
            {events.map(event => (
              <MidiaBox key={event.id}>
                <header>
                  <img
                    src={`${event.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${event.thumbnail.extension}`}
                    alt={event.title}
                  />
                </header>

                <div>
                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    {event.description}
                  </p>
                </div>
              </MidiaBox>
            ))}
          </ContainerMidia>

        </Content>
      </Container>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PersonagemProps> = async (context) => {
  const { name } = context.params;

  const searchResult = await api.get(`characters?name=${name}`);

  const character = searchResult.data.data.results[0];

  const comicsResult = await api.get(`characters/${character.id}/comics`);
  const seriesResult = await api.get(`characters/${character.id}/series`);
  const eventsResult = await api.get(`characters/${character.id}/events`);

  return {
    props: {
      character,
      comics: comicsResult.data.data.results,
      series: seriesResult.data.data.results,
      events: eventsResult.data.data.results
    },
    revalidate: 60 * 60 * 24 * 30,
  }
}