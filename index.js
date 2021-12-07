import myCollection from './collection.js';
import chalk from 'chalk';

function describeItem(item) {
  if (item.count === 1) {
    console.log(
      'I have a name. ' +
        chalk.cyan(item.name) +
        " Here's what I like about it: " +
        item.whatILike
    );
  }

  if (item.count > 1) {
    console.log(
      'I have ' +
        chalk.yellow(item.count) +
        ' names. ' +
        chalk.cyan(item.name) +
        " Here's what I like about it: " +
        item.whatILike
    );
  }
}

describeItem(myCollection[1]);

function describeCollection(arr) {
  arr.forEach(describeItem);
}

describeCollection(myCollection);
