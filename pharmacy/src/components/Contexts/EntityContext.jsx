import { createContext } from "react";

const EntityContext = createContext({
    firstName:'',
    lastName:'',
    gender:'',
    status:''
});
export default EntityContext;

// function BookContextProvider(props) {
//     const [Books, setBooks] = useState([
//       { title: "title 1", author: "Author 1", id: 1 },
//       { title: "title 12", author: "Author 2", id: 2 }
//     ]);
//     // eslint-disable-next-line
//     const addBook = (title, author) => {
//       setBooks([...Books, { title: title, author: author, id: uuid() }]);
//     };
//     // eslint-disable-next-line
//     const delBook = id => setBooks(Books.filter(book => book.id !== id));
//     return (
//       <BookContext.Provider value={{ Books, addBook, delBook }}>
//         {props.children}
//       </BookContext.Provider>
//     );
//   };