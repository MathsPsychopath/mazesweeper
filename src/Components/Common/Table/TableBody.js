function RowColumnData({ record, isLastRecord }) {
  const parsedRecords = record.slice(1);
  return (
    <>
      {parsedRecords.map(([key, value], index) => (
        <td
          key={record[0] + key}
          className={
            "border-slate-500 " +
            (index === 0 && " rounded-l ") +
            (index === parsedRecords.length - 1 && " rounded-r ") +
            (isLastRecord || " border-b ")
          }
        >
          {value}
        </td>
      ))}
    </>
  );
}

/**
 *
 * @param {Object} obj
 * @param {Array<Map>} obj.data
 * @returns {JSX.Element}
 */
export default function TableBody({ data }) {
  const records = data.map((obj) => [...obj.entries()]);
  return (
    <tbody>
      {records.map((record, index) => (
        <tr className="bg-white hover:bg-purple-300 duration-200 " key={index}>
          <RowColumnData
            record={record}
            isLastRecord={index === records.length - 1}
          />
        </tr>
      ))}
    </tbody>
  );
}
