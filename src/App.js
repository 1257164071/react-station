//import { people } from './data.js';
//import { getImageUrl } from './utils.js';
/*
function Item({ name, isPacked }) {
    let itemContent = name;
    if(isPacked) {
        itemContent = (
            <del>{name + "fds"}</del>
        )
    }
    return (
        <li className="item">{itemContent}</li>
    )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>``
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        if(true){
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
        }
      </ul>
    </section>
  );
}

*/
/*
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
*/
/*
export default function App(){
    return (
        <Toolbar 
            onPlayMovie={() => alert("fdfs")}
            onUploadImage={() => alert("fdfs")}
        />
    )
}

function Toolbar({onPlayMovie, onUploadImage}){
    return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
    )
}

function Button({ onClick, children }){
    return (
        <button onClick={onClick}>{children}</button>
    )
}
*/

/*
import { useState } from 'react';
import { sculptureList } from './data.js';
import { Routes, Route, Link } from "react-router-dom"
export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;
    function handleNextClick(){
        if (hasNext){
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handleMoreClick(){
        setShowMore(!showMore);
    }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );

}

*/

import { useState } from 'react';
import { sculptureList } from './data.js';
import { Routes, Route, Link } from "react-router-dom"
import '@nutui/nutui-react/dist/style.css'
import Home from './pages/Home'
import UserList from './pages/users/Users.js'
import Recharge from './pages/users/Recharge.js'
import Orders from './pages/orders/Orders.js'
export default function App(){
    const logo = ''
    return (
        <div className="App"  style={{ height: "100%" }}>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/userlist" element={<UserList />} />
                <Route path="/jecz" element={<Recharge />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </div>
    )
}