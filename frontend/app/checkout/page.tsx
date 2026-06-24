import BillingForm from "@/components/checkout/BillingForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <section className="py-16">
      <div className="max-w-(--container-width) mx-auto px-2">
        <h1 className="text-3xl font-bold text-(--heading-color) mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Billing */}
          <div className="lg:col-span-2">
            <BillingForm />
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}
