var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

// Write code to do the following:

// Print Elizabeth's phone number.
console.log(phonebookDict['Elizabeth']);

// Add a entry to the dictionary: Kareem's number is 938-489-1234.
phonebookDict['Kareem'] = '938-489-1234';

// Delete Alice's phone entry.
delete phonebookDict['Alice'];

// Change Bob's phone number to '968-345-2345'.
phonebookDict['Bob'] = '968-345-2345';

// Print all the phone entries.
for (entry in phonebookDict) {
  var number = phonebookDict[entry];
  console.log("Name: " + entry + "\nPhone Number: " + number + "\n");
}
