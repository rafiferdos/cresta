import { getItems, Item } from '@/lib/items'
import { MarketplaceContent } from '@/components/marketplace-content'

export default async function Home() {
  let items: Item[] = []
  let error = null

  try {
    items = await getItems()
  } catch (err) {
    error = 'Failed to load items'
    console.error('Error loading items:', err)
  }

  return <MarketplaceContent items={items} error={error} />
}