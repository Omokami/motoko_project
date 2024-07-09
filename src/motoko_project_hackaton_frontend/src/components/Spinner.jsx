const Spinner = ({ color }) => {
  console.log('Spinner color:', color);

  const colorClasses = {
    blue: 'border-blue-800',
    green: 'border-green-800',
    // Agrega más colores si es necesario
  };

  return (
    <div className="flex justify-center mt-2">
      <div className={`loader border-t-4 ${colorClasses[color]} rounded-full w-8 h-8 animate-spin`}></div>
    </div>
  );
}

export default Spinner;
