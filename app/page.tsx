import { getItems } from "@/lib/items";

export default async function Home() {
  let items = [];
  let error = null;

  try {
    items = await getItems();
  } catch (err) {
    error = "Failed to load items";
    console.error("Error loading items:", err);
  }

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
          Cresta
        </h1>
        <p className="text-xl text-gray-600">AI-enabled marketplace according to your needs</p>
      </div>

      {/* Error State */}
      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-red-700 font-semibold mb-2">Connection Error</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-sm text-red-500">
            Make sure MongoDB is connected and check your environment variables.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Stats & Actions */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Marketplace Items
              </h2>
              <p className="text-gray-600">
                {items.length} {items.length === 1 ? 'item' : 'items'} available
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Add Item
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium">
                Manage
              </button>
            </div>
          </div>

          {/* Items Grid */}
          {items.length === 0 ? (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4a1 1 0 00-1-1H9a1 1 0 00-1 1v1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">No items yet</h3>
                <p className="text-gray-500">
                  Start building your marketplace by adding some items
                </p>
                <div className="pt-4">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium">
                    Add Your First Item
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={String(item._id)} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100">
                  {/* Image */}
                  {item.imageUrl ? (
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-pink-600 transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-pink-600">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.category && (
                        <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="pt-2 flex gap-2">
                      <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
