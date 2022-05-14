import { useState } from 'react';
import Catalog from '../components/Catalog';



function Home() {
  const [filters, setFilters] =useState(['conjuntos', 'arnes', 'corset', 'body'])
  const [products, setProducts] = useState(
    [
      {
       createdAt: "2022-05-13T13:28:29.041Z",
       name: "Paul Barton",
       img: "http://loremflickr.com/200/300?random=1",
       description: "The Football Is Good For Training And Recreational Purposes",
       price:4500,
       id: 1
      },
      {
       createdAt: "2022-05-14T08:29:00.054Z",
       name: "Allison Adams",
       img: "http://loremflickr.com/200/300?random=2",
       description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
       price:4500,
       id: 2
      },
      {
       createdAt: "2022-05-14T08:09:30.977Z",
       name: "Christie Hickle",
       img: "http://loremflickr.com/200/300?random=3",
       description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
       price:4500,
       id: 3
      },
      {
       createdAt: "2022-05-13T12:42:37.168Z",
       name: "Dr. Pete Leffler",
       img: "http://loremflickr.com/200/300?random=4",
       description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
       price:4000,
       id: 4
      },
      {
       createdAt: "2022-05-14T01:23:54.925Z",
       name: "Molly Monahan",
       img: "http://loremflickr.com/200/300?random=5",
       description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
       price:4500,
       id: 5
      },
      {
       createdAt: "2022-05-13T10:09:06.515Z",
       name: "Conrad Hessel",
       img: "http://loremflickr.com/200/300?random=6",
       description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
       price:4500,
       id: 6
      }
     ]
  )
    return (
      <>
        <Catalog products={products} filters={filters}/>
      </>
    );
  }
  
  export default Home;