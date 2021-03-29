import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Container, Content } from '../styles/pages/BuscaStyles';

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

interface SearchProps {
  searchResults: Character[];
  numberOfCharacters: number;
  nameSearch: string | string[];
}

export default function Search({ searchResults, numberOfCharacters, nameSearch }: SearchProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const LIMIT: number = Number(process.env.NEXT_PUBLIC_LIMIT);

  const [numberOfPages, setNumberOfPages] = useState(1);
  const [characters, setCharacters] = useState(searchResults);
  const [resetPagination, setResetPagination] = useState(false);

  useEffect(() => {
    setNumberOfPages(Math.ceil(numberOfCharacters / 10));
    setCharacters(searchResults);
  }, [searchResults]);

  // Utiliza o router para navegar entre as páginas e manter um histórico
  const handleChangePage = async (page: number) => {
    router.push(`/busca?nome=${nameSearch}&page=${page}`, undefined, { shallow: true });
  };

  // Efeito causado pela troca de rota com modificação na query page
  useEffect(() => {
    setLoading(true);

    // Buscar os personagens da busca e da página selecionada
    api.get(`characters?nameStartsWith=${nameSearch}&offset=${Number(router.query.page) * LIMIT - LIMIT}`)
      .then(result => {
        setCharacters(result.data.data.results);
        setLoading(false);
      });

  }, [router.query.page]);

  return (
    <>
      <SEO
        title={`Personagens Marvel | Busca por ${nameSearch}`} shouldExludeTitleSuffix
        description="Página que utiliza API da Marvel para consulta dos seus personagens."
      />

      <Header loading={loading} />

      <Container>
        <Content>
          {characters.length === 0 && (
            <h2>Nenhum personagem com o nome <strong>{nameSearch}</strong> foi encontrado!</h2>
          )}

          {characters.length === 1 && (
            <h2>Foi encontrado <strong>1</strong> personagem com o nome <strong>{nameSearch}</strong>!</h2>
          )}

          {characters.length > 1 && (
            <h2>Foram encontrados <strong>{numberOfCharacters}</strong> personagens com o nome <strong>{nameSearch}</strong>!</h2>
          )}

          <Characters characters={characters} loading={loading} />

          <Pagination
            numberOfPages={numberOfPages}
            changePage={handleChangePage}
          />

        </Content>
      </Container>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
  const { nome } = context.query;

  if (!nome) {
    return {
      props: {
        searchResults: [],
        numberOfCharacters: 0,
        nameSearch: nome,
      }
    };
  }

  const searchResults = await api.get(`characters?nameStartsWith=${nome}&limit=10`);

  return {
    props: {
      searchResults: searchResults.data.data.results,
      numberOfCharacters: searchResults.data.data.total,
      nameSearch: nome,
    }
  }
}