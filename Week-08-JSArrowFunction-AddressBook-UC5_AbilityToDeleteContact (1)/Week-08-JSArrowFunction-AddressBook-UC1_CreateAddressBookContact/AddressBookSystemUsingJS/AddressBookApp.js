//Create a class to store the contact details
class Contact {
  //Create a constructor to initialize variables
  constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
    //Create  variables and set the value
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  //Create  a  method to display contact details
  printContact() {
    //print the details
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}`);
    console.log(`Phone: ${this.phoneNumber}`);
    console.log(`Email: ${this.email}`);
  }
}

//Create a class AddressBook to store the contacts
class AddressBook {
  //Create a constructor to initialize variable
  constructor() {
    this.contacts = [];
  }

  //Create a  method to add a new contact
  addContact(contact) {
    this.contacts.push(contact);
  }

  //Create a Method to display all contacts
  displayAllContacts() {
    if (this.contacts.length === 0) {
      //print the statement
      console.log("No contacts found.");
      return;
    }

    //print the statement
    console.log("All Contacts are: \n");
    this.contacts.forEach((contact) => {
      //Call the method
      contact.printContact();
    });
  }
}

//Create an object of AddressBook
const addressBook = new AddressBook();

//Create an object of contact class
const contact1 = new Contact("Anchal","Sahu","Green Park Colony","Bhopal","MP","462001","16545632","Sahuanchal22@gmail.com");
//Call the method to add contact
addressBook.addContact(contact1);

const contact2 = new Contact("Nilesh","Yadav","Arjun Nagar","Mandideep","MP","656651","56514865","yadav3165@gmail.com");
//Call the method to add contact
addressBook.addContact(contact2);

// Display all contacts
addressBook.displayAllContacts();
