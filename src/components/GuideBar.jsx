function GuideBar({ title, subtitle }) {
  return (
    <nav
      style={{
        width: "100%",
        background: "rgba(255, 255, 255, 0.03)", // Semi-transparent white background
        zIndex: "5",
        position: "fixed",
        top: "0",
        left: "0",
        textAlign: "center",
        padding: "10px",
        backdropFilter: "blur(10px)", // Adds a blur effect to the background
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
      }}
    >
      <h4
        style={{
          color: "rgb(0, 123, 255)",
          fontWeight: "bold",
          margin: "0",
        }}
      >
        {title || "Emo Face 🟦🟦"}
      </h4>
      <p
        style={{
          color: "white",
          margin: "0",
          fontSize: "0.9rem",
        }}
      >
        {subtitle || "Caress on his head to make him calm ⭐"}
      </p>
    </nav>
  );
}

export default GuideBar;