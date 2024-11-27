import React from "react";

const Toolbar = ({ onAddFurniture, onSaveDesign }) => {
  const furnitureTypes  = [
    { type: "chair", label: "Chair", img: "https://img.freepik.com/free-photo/green-lifestyle-chair-white-background-furniture_1122-1833.jpg?t=st=1732522590~exp=1732526190~hmac=1a40d57bf53dc2256b06c59358a9c90832670a66b4b7d13d93412991adeaa395&w=1060" },
    { type: "table", label: "Table", img: "/images/table.png" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        background: "#f7f7f7",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {furnitureTypes.map((item) => (
        <div
          key={item.type}
          onClick={() => onAddFurniture(item.type)}
          style={{
            textAlign: "center",
            cursor: "pointer",
            margin: "0 10px",
          }}
        >
          <img
            src={item.img}
            alt={item.label}
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
          <p>{item.label}</p>
        </div>
      ))}

      {/* Save Button */}
      <button
        onClick={onSaveDesign}
        style={{
          padding: "10px 20px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Save Design
      </button>
    </div>
  );
};

export default Toolbar;
