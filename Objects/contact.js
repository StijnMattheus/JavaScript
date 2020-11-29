var contact = {
    firstName: "",
    lastName: "",
    address: "",
    postCode: "",
    city: ""    
}

var contacts = [];

function addContact(newContact) {    
    contacts.push(newContact);
}

function addContacts() {
    contacts.length = 0;    
    let newContact = {
        firstName: "Stijn",
        lastName: "Mattheus",
        address: "Boterstraat 73",
        postCode: "8800",
        city: "Roeselare"
    };
    addContact(newContact);

    newContact = {
        firstName: "Briek",
        lastName: "Mattheus",
        address: "Boterstraat 73",
        postCode: "8800",
        city: "Roeselare"
    };
    addContact(newContact);

    newContact = {
    firstName: "Willy",
        lastName: "Mattheus",
        address: "James Ensorlaan 23",
        postCode: "8480",
        city: "Ichtegem"
    };
    addContact(newContact);
}

function submitNewContact() {
    let newContact = {
        firstName: document.getElementById("newFirstName").value,
        lastName: document.getElementById("newLastName").value,
        address: document.getElementById("newAddress").value,
        postCode: document.getElementById("newPostCode").value,
        city: document.getElementById("newCity").value
    }; 
    addContact(newContact);
    displayHTMLTable();
}

function initHTMLTable() {
    addContacts();
    displayHTMLTable();
}

function sortHTMLTable() {
    contacts.sort(
        function (a,b) {
            var x = a.firstName.toLowerCase();
            var y = b.firstName.toLowerCase(); 
            if(x < y) {
                return -1;
            }
            if(x > y) {
                return 1
            };
            return 0;
        });
    displayHTMLTable();
}

function displayHTMLTable(){
    var htmlTable; 
    htmlTable = "<table id=\"contactList\"><tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Post Code</th><th>City</th></tr>";
    contacts.forEach(currContact => {
        htmlTable += ("<tr><td>" + currContact.firstName + "</td>");
        htmlTable += ("<td>" + currContact.lastName + "</td>");
        htmlTable += ("<td>" + currContact.address + "</td>");
        htmlTable += ("<td>" + currContact.postCode + "</td>");
        htmlTable += ("<td>" + currContact.city + "</td></tr>");
    });
    htmlTable += "</table>";
    document.getElementById("htmlTable").innerHTML = htmlTable;
}

function addInsertElements(){
    var htmlInsertElements;
    htmlInsertElements = "<table id=\"inputTable\"><tr>";
    htmlInsertElements += "<th>First Name</th>";
    htmlInsertElements += "<th>Last Name</th>";
    htmlInsertElements += "<th>Address</th>";
    htmlInsertElements += "<th>Post Code</th>";
    htmlInsertElements += "<th>city</th></tr>";
    htmlInsertElements += "<tr><td><input type=\"text\" id=\"newFirstName\"></td>"; 
    htmlInsertElements += "<td><input type=\"text\" id=\"newLastName\"><br></td>"; 
    htmlInsertElements += "<td><input type=\"text\" id=\"newAddress\"></td>";    
    htmlInsertElements += "<td><input type=\"text\" id=\"newPostCode\"></td>";
    htmlInsertElements += "<td><input type=\"text\" id=\"newCity\"></td>";
    htmlInsertElements += "</tr><table>"
    htmlInsertElements += "<button onclick=\"submitNewContact()\">Submit</button>";
    htmlInsertElements += "<button onclick=\"hideNewContactElements()\">Hide Input</button>";
    document.getElementById("insertElements").innerHTML = htmlInsertElements;
}

function hideNewContactElements(){
    document.getElementById("insertElements").innerHTML = "";
}
