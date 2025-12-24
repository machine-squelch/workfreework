import { Metadata } from 'next'
import { SearchPageClient } from './SearchPageClient'

export const metadata: Metadata = {
  title: 'Search | WorkFreeWork',
  description: 'Search essays, tools, and playbook content on WorkFreeWork',
}

export default function SearchPage() {
  return <SearchPageClient />
}
