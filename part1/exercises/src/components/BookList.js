export default function BookList() {
   let pageTitle = "New Books to Read";
   let book1 = "https://tse2.mm.bing.net/th?id=OIF.bRO1YneySddPNUbq8ffg1g&pid=Api&P=0&h=180";
   let book2 = "https://tse1.mm.bing.net/th?id=OIF.CfoRYcubCKlYB%2fmA2CLObg&pid=Api&P=0&h=180";
   let book3 = "https://tse4.mm.bing.net/th?id=OIF.c2c4emYAxhCvbV4e8hyArg&pid=Api&P=0&h=180";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Good Bad Girl" />
         <img src={book2} alt="Fire Punch" />
         <img src={book3} alt="All Good Things" />
      </div>      
   );
}