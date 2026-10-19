export function Booking() {
  return (
    <section className="section" id="book">
      <div className="section-panel book-panel">
        <div>
          <p className="eyebrow">Book time</p>
          <h2>Schedule a pickup in under a minute.</h2>
          <p className="lead">
            Tell us your neighborhood and preferred window. We confirm within one business day.
          </p>
        </div>
        <form
          className="book-form"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <label>
            Name
            <input name="name" type="text" placeholder="Alex Morgan" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="alex@email.com" required />
          </label>
          <label>
            Neighborhood
            <input name="area" type="text" placeholder="Capitol Hill" required />
          </label>
          <label>
            Preferred window
            <select name="window" defaultValue="weekday-am">
              <option value="weekday-am">Weekday morning</option>
              <option value="weekday-pm">Weekday afternoon</option>
              <option value="saturday">Saturday</option>
            </select>
          </label>
          <button type="submit" className="book-btn book-btn--block">
            Request pickup
          </button>
        </form>
      </div>
    </section>
  )
}
