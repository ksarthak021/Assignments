import { useState } from 'react'
import type { FormEvent } from 'react'
import { DEMO_ORDER_ID } from '../lib/constants'

type Stage = {
  id: string
  label: string
  detail: string
  state: 'done' | 'active' | 'pending'
}

const DEMO_STAGES: Stage[] = [
  { id: '1', label: 'Collected', detail: 'Bag picked up near Ajmer Road · 9:40a', state: 'done' },
  { id: '2', label: 'In care', detail: 'Wash & press underway at the studio', state: 'active' },
  { id: '3', label: 'Out for delivery', detail: 'Rider assigned for evening window', state: 'pending' },
  { id: '4', label: 'Delivered', detail: 'Hang-ready at your door', state: 'pending' },
]

export function Track() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [stages, setStages] = useState<Stage[] | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const id = query.trim().toUpperCase()
    if (!id) {
      setError('Enter a reference number.')
      setStages(null)
      return
    }
    if (id !== DEMO_ORDER_ID) {
      setError(`No order found. Try the demo reference ${DEMO_ORDER_ID}.`)
      setStages(null)
      return
    }
    setError('')
    setStages(DEMO_STAGES)
  }

  return (
    <section className="section" id="track">
      <div className="panel track-panel">
        <div>
          <p className="eyebrow">Track order</p>
          <h2>See where your laundry is.</h2>
          <p className="lead">
            Enter your reference to view live stages — demo order:{' '}
            <button
              type="button"
              className="text-chip"
              onClick={() => {
                setQuery(DEMO_ORDER_ID)
                setError('')
                setStages(DEMO_STAGES)
              }}
            >
              {DEMO_ORDER_ID}
            </button>
          </p>
          <form className="track-form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="track-id">
              Order reference
            </label>
            <input
              id="track-id"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. NL-1042"
              autoComplete="off"
            />
            <button type="submit" className="btn btn--navy">
              Track
            </button>
          </form>
          {error ? <p className="field-error">{error}</p> : null}
        </div>

        {stages ? (
          <ol className="track-steps">
            {stages.map((stage) => (
              <li key={stage.id} className={`is-${stage.state}`}>
                <strong>{stage.label}</strong>
                <span>{stage.detail}</span>
              </li>
            ))}
          </ol>
        ) : (
          <div className="track-empty">
            <p>Status appears here once you look up a reference.</p>
          </div>
        )}
      </div>
    </section>
  )
}
