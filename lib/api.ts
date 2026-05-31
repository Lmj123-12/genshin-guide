import { supabase } from './supabase'

export interface Character {
  id: string
  name: string
  element: string
  rarity: number
  weapon_type: string
  region: string
  avatar: string
}

export async function getCharacters(): Promise<Character[]> {
  const { data, error } = await supabase
    .from('characters')
    .select('id, name, element, rarity, weapon_type, region, avatar')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching characters:', error)
    return []
  }

  return (data || []).map((char) => ({
    ...char,
    name: char.name ?? '',
    element: char.element ?? '',
    weapon_type: char.weapon_type ?? '',
    region: char.region ?? '',
    avatar: char.avatar ?? '',
  }))
}
