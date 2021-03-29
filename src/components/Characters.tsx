import Link from 'next/link';
import { Container, CharacterBox } from '@/styles/components/CharactersStyles';

import { Loading } from '@/components/Loading';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface CharactersProps {
  characters: Character[];
  loading: boolean;
}

export function Characters({ characters, loading }: CharactersProps) {
  return (
    <>
      {loading && <Loading />}

      <Container>
        {characters.map(character => (
          <CharacterBox key={character.id}>
            <Link href={`/personagem/${character.name}`}>
              <a>
                <header>
                  <img
                    src={`${character.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                </header>

                <div>
                  <h2>
                    {character.name}
                  </h2>

                  <p>
                    {character.description}
                  </p>
                </div>
              </a>
            </Link>
          </CharacterBox>
        ))}
      </Container>
    </>
  );
}
