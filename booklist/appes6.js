//Book class
class Book{
  constructor(title,author,isbn){
    this.title =title;
    this.author=author;
    this.isbn=isbn; 
  }
}
//UI class
class UI{
//Function to add the book
addBooktoList(book){
  const list  = document.getElementById('book-list');
  const row  = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete-item">X</a></td>
  `
  list.appendChild(row);
}
///function to clear the fileds after its been added in the list
clearFields(){
  document.getElementById('title').value=' ';
  document.getElementById('author').value=' ';
    document.getElementById('isbn').value=' ';
}

//Alert messsage
showAlert(messsage,className){
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.textContent = messsage;
  const container  = document.querySelector('.container');
  const form = document.getElementById('book-form');
  container.insertBefore(div,form);
  setTimeout(function(){
    document.querySelector('.alert').remove()
  },3000); 
}

//Removing Book
removeBook(target){
  if(target.className==='delete-item'){
    target.parentElement.parentElement.remove();
  }
}
}

 //Event Handler
 document.getElementById('book-form').addEventListener('submit',function(e){
  const title  = document.getElementById('title').value;
        author =document.getElementById('author').value;
        isbn = document.getElementById('isbn').value;

  const book = new Book(title,author,isbn);
  const ui =new UI();
  //Adding the Book
  if(title==='' || author==='' || isbn===''){
    ui.showAlert('Please enter all the details','error');
  }else{
   
    ui.addBooktoList(book);
    //Clearingthe fields after the book is bene added
  ui.clearFields();
  //Alert pop after details are entered
  ui.showAlert('Details added','success');
  
  }
  e.preventDefault();
});
 //Deleting a book after its added in the list
document.getElementById('book-list').addEventListener('click',function(e){
  const ui = new UI();
  ui.removeBook(e.target);
  //Alert Message
  ui.showAlert('Book removed','success');
   e.preventDefault();
  });