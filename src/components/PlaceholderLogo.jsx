

// Un componente simple para mostrar un logo marcador de posición.
const PlaceholderLogo = ({ name }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-center justify-center h-full">
    <span className="text-xl font-bold text-slate-400">{name}</span>
  </div>
);

export default PlaceholderLogo;