export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = (packedItems / totalItems) * 100;
  return (
    <footer className="stats">
  {totalItems === 0 ? (
        <p>Make sure to add items to the packing list above.Thank you</p>
      ) : packedItems < totalItems ? (
        <p>
          You have Packed: {packedItems} of {totalItems} item ({Math.round(percentagePacked)}%)
        </p>
      ) : (
        <p>You are ready to go! ✈️</p>
      )}
      
    </footer>
  );
}
