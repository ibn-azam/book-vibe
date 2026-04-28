import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBooks from '../../components/Hero/AllBooks/WishlistBooks/WishlistBooks';
import ReadBooks from '../../components/Hero/AllBooks/ReadBooks/ReadBooks';

const Books = () => {

    const {storedBooks,wishlistBooks} = useContext(BookContext);
    const [sortingType,setSortingtype] = useState("");
    console.log(sortingType, 'serSorting')
    return (
        <div className='container mx-auto'>
          <details className="dropdown flex justify-center my-2">
  <summary className="btn m-1 bg-green-500 text-white">Sort By</summary>
  <ul className="menu dropdown-content bg-green-500 text-white rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortingtype('pages')}><a>pages</a></li>
    <li onClick={()=>setSortingtype('ratings')}><a>ratings</a></li>
  </ul>
</details>
             <Tabs>
    <TabList>
      <Tab>Read List ({storedBooks.length})</Tab>
      <Tab>Wishlist ({wishlistBooks.length})</Tab>
    </TabList>

    <TabPanel>
      <ReadBooks sortingType={sortingType}></ReadBooks>
    </TabPanel>
    <TabPanel>
      <WishlistBooks sortingType={sortingType}></WishlistBooks>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;