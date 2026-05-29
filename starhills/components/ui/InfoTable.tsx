interface InfoTableProps {
  data: Record<string, string>
}

export default function InfoTable({ data }: InfoTableProps) {
  const entries = Object.entries(data)
  return (
    <table className="w-full border-collapse text-sm md:text-base">
      <tbody>
        {entries.map(([key, value], i) => (
          <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="py-3 px-4 font-semibold text-navy border border-gray-200 w-32 whitespace-nowrap">
              {key}
            </td>
            <td className="py-3 px-4 text-gray-700 border border-gray-200">
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
