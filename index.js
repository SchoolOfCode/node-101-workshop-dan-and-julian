let myCollection = [
  {
    name: 'School of Code mug',
    count: 1,
    whatILike: 'It has my cute pixel character on it!',
  },
  {
    name: 'School of Code hat',
    count: 2,
    whatILike: 'An often overlooked fashion accessory',
  },
  {
    name: 'School of Code pillow',
    count: 1,
    whatILike: 'Eat. Sleep. Code. Repeat :)',
  },
];

function describeItem(item) {
  console.log(
    'I have a name. ' +
      item.name +
      " Here's what I like about it: " +
      item.whatILike
  );
}

describeItem(myCollection[1]);

// // 2d. Now make a function called describeCollection that takes in an array as a parameter. -- DONE
// The function should loop through the array, and for each item, it should call the describeItem -- DONE
// function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the myCollection array.

// Run the file again to see the output and check that it outputs the correct message for each
// item in your collection (i.e. each object in your myCollection array).

function describeCollection(arr) {
  arr.forEach(describeItem);
}

describeCollection(myCollection);
