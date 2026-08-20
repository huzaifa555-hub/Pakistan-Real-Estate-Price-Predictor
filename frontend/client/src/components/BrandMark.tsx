/* Quiet Civic Modernism: a compact roofline/data-baseline mark anchors the product identity. */
export function BrandMark({ small = false }: { small?: boolean }) {
  return <div className={`relative grid place-items-center rounded-full bg-[#14232d] ${small ? 'h-9 w-9' : 'h-11 w-11'}`} aria-hidden="true"><img src="/manus-storage/property-signal-mark_23d87a38.png" alt="" className="h-[72%] w-[72%] object-contain" /><span className="absolute bottom-[8px] h-[2px] w-[36%] rounded-full bg-[#67c7a8]" /></div>;
}
