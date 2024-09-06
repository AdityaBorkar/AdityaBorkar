export default function BookCallFooter() {
  return (
    <section className="section pb-48 pt-72">
      {/* Add cursors and areas of expertise in the background */}

      <div className="px-36 text-center text-5xl font-semibold leading-normal tracking-tight">
        Let's discuss your ideas and figure out if we are a great fit for
        each-other.
      </div>

      <button
        type="button"
        className="mx-auto mt-12 block rounded-2xl bg-foreground px-12 py-4 text-xl font-semibold text-background shadow-md"
      >
        Book a call
      </button>

      <div>About</div>
      <div>Services</div>
      <div>Work</div>
    </section>
  )
}
