import React from 'react'

import './styles.css'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const events = [
  { date: 'May 30', title: 'Old Town Night Market', location: 'Phuket Town' },
  { date: 'Jun 2', title: 'Sunset Beach Yoga', location: 'Kata Beach' },
  { date: 'Jun 5', title: 'Andaman Seafood Festival', location: 'Rawai Pier' },
]

const featuredArticles = [
  '7 hidden beaches locals still love in low season',
  'How to island-hop from Phuket in one weekend',
  'Best family-friendly cafés with ocean views',
]

const events = [
  { date: 'May 30', title: 'Old Town Night Market', location: 'Phuket Town' },
  { date: 'Jun 2', title: 'Sunset Beach Yoga', location: 'Kata Beach' },
  { date: 'Jun 5', title: 'Andaman Seafood Festival', location: 'Rawai Pier' },
]

const featuredArticles = [
  '7 hidden beaches locals still love in low season',
  'How to island-hop from Phuket in one weekend',
  'Best family-friendly cafés with ocean views',
]

export default function HomePage() {
  return (
    <div className="todophuket-page">
      <header className="site-header">
        <div>
          <p className="eyebrow">ToDoPhuket.com</p>
          <h1>Your island guide to Phuket</h1>
        </div>
        <nav aria-label="Main navigation">
          <a href="#news">News</a>
          <a href="#events">Events</a>
          <a href="#articles">Articles</a>
          <a href="#real-estate">Real Estate</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Discover what&apos;s happening today in Phuket</h2>
          <p>
            Daily local updates, upcoming events, travel ideas, and property opportunities—all in one
            place.
          </p>
        </section>

        <section className="grid" aria-label="Main content sections">
          <article id="news" className="card news">
            <h3>Latest News</h3>
            <ul>
              <li>
                <strong>Airport Express ferries expand service</strong>
                <span> Faster transfers between Patong, Kata, and airport terminals.</span>
              </li>
              <li>
                <strong>Monsoon safety updates released</strong>
                <span> Lifeguard zones and real-time beach flag reporting now live.</span>
              </li>
              <li>
                <strong>Weekend street food route announced</strong>
                <span> New evening route connects three popular night markets.</span>
              </li>
            </ul>
          </article>

          <article id="events" className="card events">
            <h3>Upcoming Events</h3>
            <ul>
              {events.map((event) => (
                <li key={event.title}>
                  <span className="event-date">{event.date}</span>
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article id="articles" className="card articles">
            <h3>Featured Articles</h3>
            <ul>
              {featuredArticles.map((article) => (
                <li key={article}>{article}</li>
              ))}
            </ul>
          </article>

          <section id="real-estate" className="card real-estate" aria-label="Real estate search">
            <h3>Real Estate Search</h3>
            <form>
              <label htmlFor="location">Location</label>
              <input id="location" name="location" placeholder="Bang Tao, Chalong, Kamala..." />

              <label htmlFor="propertyType">Property Type</label>
              <select id="propertyType" name="propertyType" defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>

              <label htmlFor="budget">Budget (THB)</label>
              <input id="budget" name="budget" placeholder="e.g. 8,000,000" />

              <button type="submit">Search Listings</button>
            </form>
          </section>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 ToDoPhuket.com · Phuket, Thailand</p>
        <p>News · Events · Guides · Real Estate</p>
      </footer>
    </div>
  )
}
