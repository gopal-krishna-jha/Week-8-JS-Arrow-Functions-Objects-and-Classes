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

//Use try block
try {
  //Create an object of contact class
  const contact1 = new Contact(
    "Anchal",
    "Sahu",
    "Green Park Colony",
    "Bhopal",
    "Madhya Pradesh",
    "462001",
    "4589673589",
    "Sahuanchal22@gmail.com"
  );
  //Call the method to add contact
  addressBook.addContact(contact1);
} catch (error) {
  //Catch block to handle the error
  //Print the error
  console.log(error.message);
}

//USe try block
try {
  //Create an object of contact class
  const contact2 = new Contact(
    "Nilesh",
    "Yadav",
    "Arjun Nagar",
    "Mandideep",
    "Madhya Pradesh",
    "656651",
    "5653414865",
    "yadav3165@gmail.com"
  );
  //Call the method to add contact
  addressBook.addContact(contact2);
} catch (error) {
  //Catch block to handle the error
  //Print the error
  console.log(error.message);
}

// Display all contacts
addressBook.displayAllContacts();
