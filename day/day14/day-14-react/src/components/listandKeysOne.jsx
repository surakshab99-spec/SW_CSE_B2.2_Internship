function SimpleList(){
    const fruits=["apple","banana"];
    const vegetablesWithId = [
    // Repeated/ duplicate names but with unique id
  { "id": 1, "name": "carrot" },
  { "id": 2, "name": "broccoli" },
  { "id": 3, "name": "spinach" },
  { "id": 4, "name": "tomato" },
  { "id": 5, "name": "potato" },
  { "id": 6, "name": "onion" },
  { "id": 7, "name": "cucumber" },
  { "id": 8, "name": "bell pepper" },
  { "id": 9, "name": "garlic" },
  { "id": 10, "name": "ginger" },
  { "id": 11, "name": "lettuce" },
  { "id": 12, "name": "cabbage" },
  { "id": 13, "name": "mushroom" },
  { "id": 14, "name": "cauliflower" },
  { "id": 15, "name": "sweet potato" },
  { "id": 16, "name": "zucchini" },
  { "id": 16, "name": "zucchini" }, //duplicate
];
 return (
    <div>
      <h5>Fruit list</h5>
      {fruits.length===0 ? (<p>no items to display</p>) :
      (
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      )
    }

      <h5>Vegetables list</h5>
      <ul>
        {vegetablesWithId.map((vegetables) => (
          <li key={vegetables.id}>{vegetables.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default SimpleList;