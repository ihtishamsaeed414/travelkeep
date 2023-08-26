import React from "react";
export default function Stats({ totalEntered, selectedCount }) {
  const percentage = (selectedCount / totalEntered) * 100;
  return (
    <footer className="stats">
      {/* <em>packing statements</em> */}
      {selectedCount === totalEntered ? (
        <p>You are ready to go! ✈️</p>
      ) : (
        <p>
          You have selected {selectedCount} out of {totalEntered} items.
          You are {percentage.toFixed(2)}% ready to go.
        </p>
      )}
    </footer>
  );
}
