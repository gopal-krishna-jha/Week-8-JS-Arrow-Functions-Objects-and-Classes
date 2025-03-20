//Create a class to store the contact details
class Contact {
  //Create a constructor to initialize variables
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    //Check email is valid or not using regex
    if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z]{3,}$/)) {
      //Throw the error
      throw new Error("Invaild Email!");
    }

    //Check first name is valid or not using regex
    if (!firstName.match(/^[A-Z][a-zA-Z]{2,}$/)) {
      //Throw the error
      throw new Error("Invaild FirstName!");
    }

    //Check lat name is valid or not using regex
    if (!lastName.match(/^[A-Z][a-zA-Z]{2,}$/)) {
      //Throw the error
      throw new Error("Invaild LastName!");
    }

    //Check address is valid or not using regex
    if (!address.match(/^[a-zA-Z0-9\s]{4,}$/)) {
      //Throw the error
      throw new Error("Invalid Address!");
    }

    //Check city is valid or not using regex
    if (!city.match(/^[a-zA-Z0-9\s]{4,}$/)) {
      //Throw the error
      throw new Error("Invalid City!");
    }

    //Check state is valid or not using regex
    if (!state.match(/^[a-zA-Z0-9\s]{4,}$/)) {
      //Throw the error
      throw new Error("Invalid State!");
    }

    //Check zip code is valid or not using regex
    if (!zip.match(/^\d{6}$/)) {
      //Throw the error
      throw new Error("Invalid Zip Code!");
    }

    //Check Phone No. is valid or not using regex
    if (!phoneNumber.match(/^\d{10}$/)) {
      //Throw the error
      throw new Error("Invalid Phone Number!");
    }

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
    console.log(
      `Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}`
    );
    console.log(`Phone: ${this.phoneNumber}`);
    console.log(`Email: ${this.email}`);
  }
}

//Create a class AddressBook to store the contacts
class AddressBook {
  //Create a constructor to initialize variable
  constructor(addressBookName) {
    this.addressBookName = addressBookName;
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
    console.log(`\nAll Contacts of ${this.addressBookName} are: \n`);
    this.contacts.forEach((contact) => {
      //Call the method
      contact.printContact();
    });
  }

  //Create a function to find and edit the details
  findAndEditContact(firstName, lastName, updatedDetails) {4
    //Create a const variable to find the contact
    const contact = this.contacts.find(
      (c) => c.firstName === firstName && c.lastName === lastName
    );

    //Check the contact and return the result
    if (!contact) {
      //print the statement if contact is not found
      console.log("Contact not found.");
      return;
    }

    //check the updatedDetails and edit the details
    if (updatedDetails.firstName) contact.firstName = updatedDetails.firstName;
    if (updatedDetails.lastName) contact.lastName = updatedDetails.lastName;
    if (updatedDetails.address) contact.address = updatedDetails.address;
    if (updatedDetails.city) contact.city = updatedDetails.city;
    if (updatedDetails.state) contact.state = updatedDetails.state;
    if (updatedDetails.zip) contact.zip = updatedDetails.zip;
    if (updatedDetails.phoneNumber) contact.phoneNumber = updatedDetails.phoneNumber;
    if (updatedDetails.email) contact.email = updatedDetails.email;

    //Print the  statement if contact updated 
    console.log("Contact updated successfully!\n");
  }

  //Create a function to find the contact and delete it
  findAndDeleteContact(firstName, lastName) {
    //Create a const variable to find the contact
    const contactIndex = this.contacts.findIndex(
      (c) => c.firstName === firstName && c.lastName === lastName
    );

    //Check the index is valid
    if (contactIndex === -1) {
      console.log("Contact not found.");
      return;
    }

    //Delete the contact
    this.contacts.splice(contactIndex, 1);
    //Print the result
    console.log(`Contact ${firstName} ${lastName} deleted successfully!\n`);
  }
}

//Create an object to store the Multiple address books
const addressBookList = [];

//Create objects of AddressBook
const addressBook1 = new AddressBook("Personal Book");
addressBookList.push(addressBook1); //add to addressBookList

//Create anthor object of AddressBook
const addressBook2 = new AddressBook("Work Book");
addressBookList.push(addressBook2);//add to addressBookList

//Use try block
try {
  //Create an object of contact class
  const contact1 = new Contact("Anchal","Sahu","Green Park Colony","Bhopal","Madhya Pradesh","462001","4589673589","Sahuanchal22@gmail.com");
  //Call the method to add contact
  addressBook1.addContact(contact1);

  //Create an object of contact class
  const contact3 = new Contact("Anuj","Sharma","Arera colony","Indore","Madhya Pradesh","568491","2587248963","anuj58@gmail.com");
  //Call the method to add contact
  addressBook1.addContact(contact3);

} catch (error) {
  //Catch block to handle the error
  //Print the error
  console.log(error.message);
}

//USe try block
try {
  //Create an object of contact class
  const contact2 = new Contact("Nilesh","Yadav","Arjun Nagar","Mandideep","Madhya Pradesh","656651","5653414865","yadav3165@gmail.com");
  //Call the method to add contact
  addressBook2.addContact(contact2);

  //Create an object of contact class
  const contact4 = new Contact("Aman","Rajput","Amedkar Nagar","PrayagRaj","Uttar Pradesh","258964","7583414865","AmanR865@gmail.com");
  //Call the method to add contact
  addressBook2.addContact(contact4);
} catch (error) {
  //Catch block to handle the error
  //Print the error
  console.log(error.message);
}

//Display all the contact
addressBookList.forEach((val) => {
  //Call the display method
  val.displayAllContacts();
});

//Call the method to find and edit the details
console.log("\nUpdate contact: \n");
addressBook1.findAndEditContact("Anuj","Sharma",{ city:"Jaipur",
  state :"Rajasthan"
});


//Call the function to delete contact
addressBook1.findAndDeleteContact("Anuj","Sharma");

//call the display method 
console.log("After Deleting");
addressBook1.displayAllContacts();


