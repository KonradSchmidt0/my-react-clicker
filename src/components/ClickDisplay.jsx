export default function ClickDisplay({ count, cps }) {
  return <h1 className="text-3xl font-bold mb-4">Clicks: {count}   Clicks per second: {cps}</h1>;
}