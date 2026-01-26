export default function DepartmentFilter() {
  const departments = [
    "All Departments",
    "Anesthetics",
    "Cardiology",
    "Gastroenterology",
    "Psychological",
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-sm">
      <p className="text-xs text-gray-500 mb-4 uppercase">
        Doctors of
      </p>

      <ul className="space-y-4">
        {departments.map((dept, index) => (
          <li
            key={index}
            className={`cursor-pointer border-b pb-3 text-sm ${
              index === 0
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {dept}
          </li>
        ))}
      </ul>
    </div>
  );
}