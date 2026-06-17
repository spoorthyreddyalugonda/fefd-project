import React from 'react';
import ItemCard from '../components/ItemCard';

const EXTENDED_MENU = [
  {
    id: 1,
    name: 'Vanilla Sweet Cream Cold Brew',
    price: 5.25, // <-- Must be exactly 'price' and a number
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500',
    desc: 'Slow-steeped custom blend cold brew topped with handcrafted vanilla sweet cream.'
  },
  {
    id: 2,
    name: 'Caffè Latte Art',
    price: 4.75,
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500',
    desc: 'Rich, full-bodied espresso in steamed milk, topped with a beautiful layer of micro-foam.'
  },
  {
    id: 3,
    name: 'Strawberry Almond Croissant',
    price: 4.50,
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500',
    desc: 'Flaky golden croissant layers loaded with sweet strawberry puree and shaved almonds.'
  },
  {
    id: 4,
    name: 'Iced Matcha Latte',
    price: 5.50,
    img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=500',
    desc: 'Organic premium Japanese matcha stone-ground whisked with cold milk over ice.'
  },
  {
    id: 5,
    name: 'Poached Egg Avocado Toast',
    price: 9.25,
    img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=500',
    desc: 'Toasted organic sourdough bread spread with seasoned avocado guacamole and a runny poached egg.'
  },
  {
    id: 6,
    name: 'Fudge Cocoa Brownie',
    price: 3.95,
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500',
    desc: 'Incredibly dense chocolate fudge brownie served hot with a light sugar dusting.'
  },
  {
    id: 7,
    name: 'Caramel Macchiato Twist',
    price: 5.95,
    img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=500',
    desc: 'Espresso combined with vanilla-flavored syrup, milk, and ice, topped with caramel.'
  },
  {
    id: 8,
    name: 'Red Velvet Gourmet Muffin',
    price: 3.75,
    img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=500',
    desc: 'Deep crimson premium cocoa cake base filled with signature sweet cream cheese centers.'
  },
  {
    id: 9,
    name: 'Affogato al Caffè',
    price: 6.50,
    img: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=500',
    desc: 'A scoop of premium vanilla bean gelato drowned in a hot shot of fresh espresso.'
  }
];

function Menu() {
  return (
    <div className="container">
      <h2 style={{ fontSize: '2.8rem', color: '#1e110a', margin: 0, textAlign: 'center' }}>Our Curated Menu</h2>
      <p style={{ color: '#777', textAlign: 'center', margin: '0.5rem 0 2rem 0' }}>Click "Add to Cart" to build up your order total live.</p>
      
      <div className="menu-grid">
        {EXTENDED_MENU.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;