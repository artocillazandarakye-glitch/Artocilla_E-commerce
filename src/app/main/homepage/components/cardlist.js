import Card from "../../../../components/ui/card";

const products = [
  {
    id: 1,
    title: "Floral Summer Dress",
    price: 49,
    image: "https://via.placeholder.com/250x300",
  },
  {
    id: 2,
    title: "Beige Blazer",
    price: 75,
    image: "https://via.placeholder.com/250x300",
  },
  {
    id: 3,
    title: "White Ruffle Dress",
    price: 59,
    image: "https://via.placeholder.com/250x300",
  },
  {
    id: 4,
    title: "Casual Linen Shirt",
    price: 35,
    image: "https://via.placeholder.com/250x300",
  },
  {
    id: 5,
    title: "Stylish Sunglasses",
    price: 25,
    image: "https://via.placeholder.com/250x300",
  },
  {
    id: 6,
    title: "Brown Leather Bag",
    price: 130,
    image: "https://via.placeholder.com/250x300",
  },
];

export default function CardList() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}