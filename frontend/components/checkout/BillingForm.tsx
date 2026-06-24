export default function BillingForm() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full mt-4 border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full mt-4 border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
      />

      <textarea
        rows={5}
        placeholder="Order Notes"
        className="w-full mt-4 border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
      />
    </div>
  );
}
