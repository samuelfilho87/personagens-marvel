import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Container, Content } from '../styles/pages/HomeStyles';

import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Characters } from '@/components/Characters';
import { Pagination } from '@/components/Pagination';

import api from "@/services/api";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface HomeProps {
  characters: Character[];
  numberOfCharacters: number;
}

export default function Home(props: HomeProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const LIMIT: number = Number(process.env.NEXT_PUBLIC_LIMIT);
  const NUMBER_OF_PAGES = Math.ceil(props.numberOfCharacters / 10);

  const [characters, setCharacters] = useState(props.characters);

  // Utiliza o router para navegar entre as páginas e manter um histórico
  const handleChangePage = async (page: number) => {
    router.push(`/?page=${page}`, undefined, { shallow: true });
  };

  // Efeito causado pela troca de rota com modificação na query page
  useEffect(() => {
    setLoading(true);

    // Buscar os personagens da página selecionada
    api.get(`characters?limit=10&offset=${Number(router.query.page) * LIMIT - LIMIT}`)
      .then(result => {
        setCharacters(result.data.data.results);
        setLoading(false);
      });

  }, [router.query.page]);

  return (
    <>
      <SEO
        title="Personagens Marvel" shouldExludeTitleSuffix
        description="Página que utiliza API da Marvel para consulta dos seus personagens."
      />

      <Header />

      <Container>
        <Content>
          <Characters characters={characters} loading={loading} />

          <Pagination
            changePage={handleChangePage}
            numberOfPages={NUMBER_OF_PAGES}
          />
        </Content>
      </Container>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const characters = await api.get(`characters?limit=${process.env.NEXT_PUBLIC_LIMIT}`);

  return {
    props: {
      characters: characters.data.data.results,
      numberOfCharacters: characters.data.data.total,
    },
    revalidate: 60 * 60 * 24 * 30,
  }
}