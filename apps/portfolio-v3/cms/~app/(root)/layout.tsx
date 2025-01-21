import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  // TODO: Analytics

  // TODO: Visitor Count
  // TODO: Visitor Nationality
  // TODO: Primary Source of Search

  // TODO: Track Session Duration
  // TODO; Track Session Pages
  // TODO: Track each page view
  // TODO: Track each button click

  // TODO: Engagement
  // Average engagement time
  // Engaged sessions per user
  // Average engagement time per session

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
