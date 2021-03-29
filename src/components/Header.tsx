import { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { IoWarningOutline } from 'react-icons/io5';
import { Container, Content, Search, Logo } from '@/styles/components/HeaderStyles';

interface HeaderProps {
  loading?: boolean;
}

export function Header({ loading }: HeaderProps) {
  const router = useRouter();

  const [searchCharacter, setSearchCharacter] = useState('');
  const [erro, setErro] = useState(false);
  const [searching, setSearching] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (searchCharacter.length > 2) {
      setErro(false);
      setSearchCharacter('');
      setSearching(true);
      router.push(`/busca?nome=${searchCharacter}`);
    } else {
      setErro(true);
    }
  }

  return (
    <Container>
      <Content>
        <Link href="/">
          <a>
            <Logo>
              <Image
                src="/images/logo.png"
                alt="Personagens Marvel"
                layout="fill"
              />
            </Logo>
          </a>
        </Link>

        <Search onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="search"
              placeholder={loading ? 'Buscando...' : 'Nome do personagem'}
              value={searchCharacter}
              onChange={event => {
                setSearchCharacter(event.target.value);
                setErro(false);
              }}
            />

            <button type="submit">
              <FaSearch />
            </button>
          </label>

          {erro && (
            <span>
              O nome deve conter pelo menos 3 caracteres
              <IoWarningOutline size={24} />
            </span>
          )}
        </Search>
      </Content>
    </Container >
  );
}
