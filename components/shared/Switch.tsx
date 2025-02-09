"use client"
export function Switch({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: () => void;
}) {
  return (
    <button
      onClick={onCheckedChange}
      className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
        checked ? "bg-primary-accent" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
