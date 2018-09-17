// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  console.log(json);
  json = json.trim()
  //json = json.replace(/\s/g,"")
  // case of primitives
  if (json[0] === '"') {
    
    return json.slice(1, json.length - 1);
  } else if (json === 'null') {
    return null;
  } else if (!isNaN(Number(json[json.length - 1]))) {
    return Number(json);
  }
  else if (json === 'true' || json === 'false') {
    if (json === 'true') {
      return true;
    } else {
      return false;
    }
  }


  // case of Array
  if (json[0] === '[' && json[json.length - 1] === ']') {
    if (json.length === 2) {
      return [];
    }

    var parsedArr = [];
    var newStr = json.slice(1, json.length - 1);
    var splittedArr = newStr.split(',');

    for (var i = 0; i < splittedArr.length; i++) {
      
      parsedArr.push(parseJSON(splittedArr[i]));
    }

    return parsedArr;
  }

  // case of Object

  if (json[0] === '{') {
  	if (json.length === 2) {
  		return {};
  	}
    var splitted =[]
		var parsedObj = {};
  	var newJSON = json.slice(1, json.length - 1);
    var temp = newJSON.match(/\{.+\}|\[.+\]/g);    
    //var matchedJSON = newJSON.replace(/[\{\[].+[\},\]]/g, 'matched');
    var matchedJSON = newJSON.replace(/\{.+\}|\[.+\]/g, 'matched');
    console.log(555,newJSON,matchedJSON)

    if(matchedJSON.includes(',')){
      
      splitted = matchedJSON.split(',');
    } else {
      splitted.push(matchedJSON)
    }
    // console.log('splitted',splitted)


    for(var i = 0 ; i < splitted.length ; i++){
      splitted[i] =splitted[i].split(':')
    } 

    // console.log('splittedAgain',splitted)

  	if (temp === null) {
      for(var i = 0 ; i < splitted.length ; i++ ){
        parsedObj[parseJSON(splitted[i][0])] = parseJSON(splitted[i][1])
      }
    } else {
      for(var i = 0 ; i < splitted.length ; i++ ){
        parsedObj[parseJSON(splitted[i][0])] = parseJSON(temp[i])
      }
    }
    
    


  	
  	console.log(3, parsedObj)

  	return parsedObj;
  }

  // if (json[0] === '{') {
  //   var newJSON = json.slice(1, json.length - 1);
  //   var parsedObj = {};

  //   if (newJSON.length === 0) {
  //     return {};
  //   }

  //   var splittedObj;

  //   if (newJSON[newJSON.length - 1] === ']') {
  //     splittedObj = newJSON.split(':');

  //     parsedObj[parseJSON(splittedObj[0])] = parseJSON(splittedObj[1]);
  //     return parsedObj;
  //   }

  //   if (newJSON[newJSON.length - 1] === '}') {
  //     var colonIdx = newJSON.indexOf(':');

  //     parsedObj[parseJSON(newJSON.slice(0, colonIdx))] = parseJSON(newJSON.slice(colonIdx + 1))

  //     return parsedObj;
  //   }


  //   if (newJSON.indexOf(',') === -1) {
  //     splittedObj = newJSON.split(':')
  //     console.log('splitted1',splittedObj)
  //     parsedObj[parseJSON(splittedObj[0].trim())] = parseJSON(splittedObj[1].trim());
  //   } else if (newJSON.indexOf(',') > newJSON.indexOf(':')) {
  //     splittedObj = newJSON.split(',');
  //     console.log('splitted2',splittedObj)
 	// 		for (var i = 0; i < splittedObj.length; i++) {
  //       var temp = splittedObj[i].split(':');
  //       parsedObj[parseJSON(temp[0].trim())] = parseJSON(temp[1].trim());
  //     }
  //   }
  //   else if (newJSON.indexOf(',') < newJSON.indexOf(':')) {
  //   	splittedObj = newJSON.split(', "');

  //   	for (var i = 0; i < splittedObj.length; i++) {
  //   		var temp = splittedObj[i].split(':');
  //   		if (i >= 1) {
  //   			temp[0] = ('"').concat(temp[0])
  //   		}
  //   		parsedObj[parseJSON(temp[0].trim())] = parseJSON(temp[1].trim());
  // 		}
  // 	}
  // return parsedObj;
  // }
};

if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = parseJSON;
}















/*


 [""CoreletAPIVersion":2",
  ""CoreletType":"standalone"",
  ""documentation":"A corelet that provides the capab…rÃ¢â‚¬â„¢s contents into a userÃ¢â‚¬â„¢s locker."",
  ""functions":
    [
      {
        "documentation":"Displays a dialog b…ows user to select a folder on the local system."",
        ""name":"ShowBrowseDialog"",
        ""parameters":
        [
          {
            "documentation":"The callback function for results."",
            ""name":"callback"",
            ""required":true",
            ""type":"callback"
          }
        ]
      }", 
     "{
        "documentation":"Uploads all mp3 files in the folder provided."",
        ""name":"UploadFolder"", 
        ""parameters":
        [
          {
            "documentation":"The path to upload mp3 files from."", 
            ""name":"path"", 
            ""required":true", 
            ""type":"string"
          }",
         "{
            "documentation": "The callback function for progress."",
            ""name":"callback"",
            ""required":true",
            ""type":"callback"
          }
        ]
      }", 
     "{
        "documentation":"Returns the server name to the current locker service."",
        ""name":"GetLockerService"", 
        ""parameters":[]
      }", 
     "{
       "documentation":"Changes the name of the locker service."",
        ""name":"SetLockerService"", 
        ""parameters":
        [
          {
            "documentation":"The value of the locker service to set active."",
            ""name":"LockerService"",
            ""required":true", 
            ""type":"string"
          }
        ]
      }", 
     "{
       "documentation":"Downloads locker files to the suggested folder."",
       ""name":"DownloadFile"", 
       ""parameters":
       [
         {
           "documentation":"The origin path of the locker file."",
           ""name":"path"", 
           ""required":true", 
           ""type":"string
         "}", 
         "{
           "documentation":"The Window destination path of the locker file."",
           ""name":"destination"", 
           ""required":true", 
           ""type":"integer"
          }", 
         "{"documentation":"The callback function for progress."",
          ""name":"callback"", 
          ""required":true", 
          ""type":"callback"
          }
        ]
      }
    ]", 
          ""name":"LockerUploader"", 
          ""version":
            {
              "major":0", 
              ""micro":1", 
              ""minor":0
            }", 
            ""versionString":"0.0.1""
          ]*/