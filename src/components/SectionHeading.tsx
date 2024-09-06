export default function SectionHeading(props: { children: React.ReactNode }) {
  return (
    <h3 className="section mb-16 mt-48 text-left text-4xl font-bold">
      {props.children}
    </h3>
  );
}
