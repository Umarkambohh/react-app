export default function OrderTypeSelection() {
  
  return (
    <>
      <div className="flex space-x-4 py-4">
        <button className="px-6 py-2 rounded-full bg-gray-300 font-semibold shadow-sm">
          Delivery
        </button>

        <button className="px-6 py-2 rounded-full bg-gray-100 font-semibold border shadow-sm">
          Pickup
        </button>
      </div>

    </>
  );
}
