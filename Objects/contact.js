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
    htmlTable = "<table id=\"contactList\"><tr><th>firstName</th><th>lastName</th><th>address</th><th>postCode</th><th>city</th></tr>";
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
