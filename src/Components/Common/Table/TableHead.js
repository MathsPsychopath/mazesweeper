function TableHeader({ children, index, max }) {
  const tlCorner = index === 0;
  const trCorner = index === max - 1;
  return (
    <th
      className={
        "p-2 pt-4 border-gray-500 border-b text-white bg-blue-300 text-sm " +
        (tlCorner && " rounded-l ") +
        (trCorner && " rounded-r ") //className spacing is dank
      }
    >
      {children}
    </th>
  );
}

export default function TableHead({ headings }) {
  const parsedHeadings = headings.slice(1);
  return (
    <thead>
      <tr>
        {parsedHeadings.map((heading, index) => (
          <TableHeader key={heading} index={index} max={parsedHeadings.length}>
            {heading}
          </TableHeader>
        ))}
      </tr>
    </thead>
  );
}
