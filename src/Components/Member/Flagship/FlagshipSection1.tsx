

export default function FlagshipBreadcrumb() {
  return (
    <div
      className="partner-breadcrumb1 bg_image"
      style={{
        display: "flex",
        justifyContent: "flex-start", // 👈 left alignment
        alignItems: "center",         // vertical center
        textAlign: "left",
        padding: "120px 50px",        // 👈 padding for top/bottom & left spacing
      }}
    >
      <div className="container">
        <h1
          className="title"
          style={{
            color: "aliceblue",
            fontSize: "48px",
            margin: 0
          }}
        >
          Flagships
        </h1>
      </div>
    </div>
  );
}