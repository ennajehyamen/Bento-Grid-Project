/* eslint-disable react/prop-types */
export default function CardHeader({ title, icon }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      {icon && <span className="text-2xl">{icon}</span>}
    </div>
  );
}
