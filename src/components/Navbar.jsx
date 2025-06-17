function Navbar() {
  return (
    <div className="px-8 py-4 flex items-center justify-between">
      <h1 className="text-3xl text-blue-500">ScanORIGIN</h1>
      <button
        className="p-2 rounded hover:bg-blue-100"
        aria-label="Open menu"
        onClick={() => alert('Menu clicked!')}
      >
        <div className="grid grid-cols-3 gap-0.5 w-6 h-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-blue-500"></div>
          ))}
        </div>
      </button>
    </div>
  );
}

export default Navbar;