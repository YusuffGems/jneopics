export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Website Working ✅
      </h1>

      <p
        style={{
          fontSize: "20px",
          opacity: 0.8,
        }}
      >
        Vite + React + Vercel deployed successfully 🚀
      </p>
    </div>
  );
}