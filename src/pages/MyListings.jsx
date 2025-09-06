import React from "react";

function MyListings() {
  const items = ["Digital Camera", "Vintage Chair", "Mountain Bike", "Coffee Table"];

  const containerStyle = {
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  const titleStyle = {
    color: "#D94F4F",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #eee",
    transition: "transform 0.2s ease",
  };

  
  return React.createElement(
    "div",
    { style: containerStyle },
    React.createElement("h1", { style: titleStyle }, "🔥 My Listings"),
    React.createElement(
      "div",
      { style: gridStyle },
      items.map((item, index) =>
        React.createElement(
          "div",
          {
            key: index,
            style: cardStyle,
            onMouseOver: (e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            },
            onMouseOut: (e) => {
              e.currentTarget.style.transform = "scale(1)";
            },
          },
          React.createElement(
            "h2",
            { style: { fontSize: "18px", fontWeight: "600", marginBottom: "8px" } },
            item
          ),
          React.createElement(
            "p",
            { style: { color: "#555" } },
            "Great condition. Ready to use."
          )
        )
      )
    )
  );
}

export default MyListings;