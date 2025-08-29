export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded-2xl border bg-white p-4 shadow-sm hover:shadow transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded-lg object-cover"
      />
      <div className="mt-3 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <span className="ml-3 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-900">
          ₨ {product.price}
        </span>
      </div>
    </div>
  );
}
