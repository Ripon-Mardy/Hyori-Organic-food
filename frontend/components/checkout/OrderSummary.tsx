export default function OrderSummary() {
  return (
    <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Fresh Mango × 2</span>
          <span>৳240</span>
        </div>

        <div className="flex justify-between">
          <span>Organic Apple × 1</span>
          <span>৳120</span>
        </div>
      </div>

      <div className="border-t mt-6 pt-6 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳360</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>৳50</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>৳410</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Payment Method</h3>

        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Cash On Delivery
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Stripe
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            SSLCommerz
          </label>
        </div>
      </div>

      <button className="w-full mt-8 bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold">
        Place Order
      </button>
    </div>
  );
}
