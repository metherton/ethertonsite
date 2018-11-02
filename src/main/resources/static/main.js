import { getUsefulContents } from './file.js';
getUsefulContents('/births.json', data => {doSomethingUseful(data);});

function doSomethingUseful(data) {
  console.log(data);
}
