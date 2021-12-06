import myCollection from "./collection.js";
import chalk from "chalk";

console.log(chalk.blue('Hello world!'));

function describeItem(item) {
  if (item.count > 1) {
    console.log(
      'I have ' + chalk.yellow(item.count) + " " +
        chalk.cyan(item.name) + "'s" +
        ". Here's what I like about it: " +
        chalk.green(item.whatILike)
    );
  } else 
  console.log(
    'I have ' + chalk.yellow(item.count) + " " +
      chalk.cyan(item.name) +
      ". Here's what I like about it: " +
      chalk.green(item.whatILike)
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
