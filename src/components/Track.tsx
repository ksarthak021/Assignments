export function Track() {
  return (
    <section className="section" id="track">
      <div className="section-panel track-panel">
        <div>
          <p className="eyebrow">Track order</p>
          <h2>See where your laundry is — without guessing.</h2>
          <p className="lead">
            Enter your order ID for live status: collected, in care, out for delivery, or complete.
          </p>
          <form
            className="track-form"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <label className="sr-only" htmlFor="order-id">
              Order ID
            </label>
            <input
              id="order-id"
              name="order"
              type="text"
              placeholder="e.g. NP-20418"
              autoComplete="off"
            />
            <button type="submit" className="book-btn book-btn--inline">
              Track
            </button>
          </form>
        </div>
        <ol className="track-steps">
          <li className="is-done">
            <strong>Collected</strong>
            <span>Bag picked up at 9:40a</span>
          </li>
          <li className="is-active">
            <strong>In care</strong>
            <span>Wash & press underway</span>
          </li>
          <li>
            <strong>Out for delivery</strong>
            <span>ETA this afternoon</span>
          </li>
          <li>
            <strong>Complete</strong>
            <span>Hang-ready at your door</span>
          </li>
        </ol>
      </div>
    </section>
  )
}
