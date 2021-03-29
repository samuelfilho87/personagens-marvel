import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from '@/styles/components/PaginationStyles';
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface PaginationProps {
  numberOfPages: number;
  changePage: Function;
}

export function Pagination({ numberOfPages, changePage }: PaginationProps) {
  const router = useRouter();

  const [page, setPage] = useState<number>(Number(1));
  const [newPage, setNewPage] = useState<number>(Number(1));
  const [buttonsPage, setButtonsPage] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let indexes = [];

    if (numberOfPages > 9) {
      // gera índices até 9
      if (newPage < 6) {
        for (let i = 1; i < 10; i++) {
          indexes.push(i);
        }
      }

      // gera indices intermediários mantendo o selecionado no meio
      if (newPage > 5 && newPage < numberOfPages - 4) {
        for (let i = newPage - 4; i < newPage + 5; i++) {
          indexes.push(i);
        }
      }

      // gera índices finais
      if (newPage > numberOfPages - 5) {
        for (let i = numberOfPages - 8; i < numberOfPages + 1; i++) {
          indexes.push(i);
        }
      }
    } else {
      // Número de íncides é menor que 9, gera todos os que existem
      for (let i = 1; i < numberOfPages + 1; i++) {
        indexes.push(i);
      }
    }

    setButtonsPage(indexes);

    // Evita refresh desnecessário da página
    if (newPage !== page) {
      setPage(newPage);
      changePage(newPage);
    }
  }, [newPage, numberOfPages]);

  // Trocou o personagem buscado reseta a paginação
  useEffect(() => {
    setNewPage(1);
  }, [router.query.nome]);

  return (
    <Container>
      {page > 2 && (
        <CgChevronDoubleLeft onClick={() => setNewPage(1)} />
      )}

      {page > 1 && (
        <BiChevronLeft onClick={() => setNewPage(page - 1)} />
      )}

      {buttonsPage.map(index => (
        <button
          type="button"
          key={index}
          onClick={() => setNewPage(index)}
          className={page === index ? 'active' : ''}
          disabled={page === index}
        >
          {index}
        </button>
      ))}

      {page < numberOfPages && (
        <BiChevronRight onClick={() => setNewPage(page + 1)} />
      )}

      {page < numberOfPages - 1 && (
        <CgChevronDoubleRight onClick={() => setNewPage(numberOfPages)} />
      )}
    </Container>
  );
}
