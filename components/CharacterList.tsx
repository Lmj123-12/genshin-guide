'use client'

import { useState } from 'react'

interface Character {
  id: string
  name: string
  element: string
  rarity: number
  weapon_type: string
  region: string
  avatar: string
}

const elements = ['全部', '火', '水', '风', '雷', '冰', '岩', '草']

const elementStyles: Record<string, string> = {
  '火': 'bg-red-100 text-red-800 border-red-300 hover:bg-red-200',
  '水': 'bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200',
  '风': 'bg-teal-100 text-teal-800 border-teal-300 hover:bg-teal-200',
  '雷': 'bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200',
  '冰': 'bg-cyan-100 text-cyan-800 border-cyan-300 hover:bg-cyan-200',
  '岩': 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200',
  '草': 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200',
}

export default function CharacterList({ characters }: { characters: Character[] }) {
  const [selectedElement, setSelectedElement] = useState('全部')

  if (!characters || characters.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 text-lg">
        暂无角色数据，请先在数据库中添加角色信息。
      </div>
    )
  }

  const filteredCharacters =
    selectedElement === '全部'
      ? characters
      : characters.filter((char) => char.element === selectedElement)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {elements.map((el) => (
          <button
            key={el}
            onClick={() => setSelectedElement(el)}
            className={`px-5 py-2 rounded-full border font-medium transition-all ${
              selectedElement === el
                ? 'ring-2 ring-offset-2 ring-blue-400 ' +
                  (el !== '全部' ? elementStyles[el] : 'bg-gray-800 text-white border-gray-800')
                : el !== '全部'
                ? elementStyles[el] + ' border'
                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
            }`}
          >
            {el}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={char.avatar}
              alt={char.name}
              className="w-24 h-24 rounded-full mb-3 object-cover border-2 border-gray-200"
            />
            <h2 className="text-lg font-semibold mb-1">{char.name}</h2>
            <div className="flex items-center gap-1 text-yellow-500 mb-1">
              {'★'.repeat(char.rarity)}
              <span className="text-gray-400 text-sm">{char.rarity}星</span>
            </div>
            <span className="text-sm text-gray-600">{char.element}元素</span>
          </div>
        ))}
      </div>
    </>
  )
}
