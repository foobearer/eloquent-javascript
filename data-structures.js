function noValFound(arrItem) {
	for(var i=0; i < arrItem.length; i++) {
		var result;
		if(arrItem[i] == -1) result = "false"
		else result = "true"
		return result
	}
}

function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1
}

//arr > obj > arr
var DB = [
  {"names":["joycee","john","jayvee"], "siblings":true},
  {"names":["joycee","maki","ken","ai"], "siblings":false}
];
//To access data
DB[0] // > Object {names: Array[3], siblings: true}
DB[0].names // > ["joycee","john","jayvee"]
DB[0].names[0] // > joycee
DB[0].siblings // > true

//function that lists all the events in Journal
for(var x in JOURNAL){
  console.log(JOURNAL[x].events)
}

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false}
];

// This makes sure the data is exported in node.js —
// `require('./path/to/04_data.js')` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = JOURNAL;

var result=[];
function rangeOfNumbers(start,end,step){
  for(var i=start; i <= end; i+=step){
    result.push(i);
  }
  return result;
}