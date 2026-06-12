export default function TrustedBy() {
  const clients = [
    "Jaitra Media",
    "Orange solutions",
    "Surgical world",
    "DNR College",
    
  ];

  return (
    <section
      className="py-8 bg-white"
      style={{
        borderTop: "1px solid #DDE6F0",
        borderBottom: "1px solid #DDE6F0",
      }}
    >
      <div className="container-x text-center">
        <div className="eyebrow mb-5">
          Companies We've Worked With
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((client) => (
            <span
              key={client}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                border: "1px solid #DDE6F0",
                color: "#6B7A8D",
              }}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}