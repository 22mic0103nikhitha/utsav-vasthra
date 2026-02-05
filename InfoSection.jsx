import "./InfoSection.css";

export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-overlay">
        <div className="info-content">

          <p><strong>Collection:</strong> We have 6000+ garments in our collection – India’s largest collection of authentic designer wear under one roof.</p>

          <p><strong>All-inclusive Price:</strong> Prices include rental, alteration, and delivery/return at store. Even GST! Extended duration, customization, and pre-delivery trial are optional extra charges.</p>

          <p><strong>Online Booking Confirmation:</strong> After online booking, you’ll receive a confirmation call from your Relationship Manager.</p>

          <p><strong>Payment:</strong> Book for rent by paying just 40% of the total rental fee. Remaining payment can be made after alteration, delivery, and successful trial.</p>

          <p><strong>Cancellation, Refund and Changes:</strong> You may cancel/change your order up to delivery. Any amount paid above the non-refundable booking fee will be refunded within 24 hours.</p>

          <p><strong>Security Deposit, Refund and Damages:</strong> Usually there is no security deposit required. You don’t have to pay for damages.</p>

          <p><strong>Fitting / Alteration:</strong> Alteration is done by us before garments are sent to you, and it’s completely free.</p>

          <p className="info-note">
            * Store cities are cities with our own stores. For cities served via delivery partners, payment is required before shipping.
          </p>

        </div>
      </div>
    </section>
  );
}
