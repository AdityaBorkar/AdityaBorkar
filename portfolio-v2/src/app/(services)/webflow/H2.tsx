export default function H2(props: { children: React.ReactNode }) {
  return (
    <h2 className="mb-24 mt-6 hidden text-center text-[50px] font-semibold uppercase tracking-wider text-neutral-600">
      {props.children}
    </h2>
  )
}
