import { getCharacters } from '@/lib/api'
import CharacterList from '@/components/CharacterList'

export default async function CharactersPage() {
  const characters = await getCharacters()

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">角色图鉴</h1>
      <CharacterList characters={characters} />
    </main>
  )
}
