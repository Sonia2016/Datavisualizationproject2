onmessage = function(event) {
  var blogs = event.data.blogs



var frequency = function(words) {
  return words.filter(Boolean).reduce(function(acc, x) {
    for(var i = 0 ; i < x.length; i++){
      if(x[i] != "" || x[i].includes(' ')){
        x[i] = x[i].replace(/'/gi, "");
          acc[x[i]] = ++acc[x[i]] || 1;}}
      return acc;
  },{})
}


function sortObject(obj) {
    var arr = [];
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) {
        return a.value - b.value;
    });
    return arr; // returns array
}

function highFrequency(words,times){
  var wordfreq = {};
  var higwords;
  var max = 0 ; 
  words = sortObject(words);

   for(var i = words.length - times ; i <  words.length; i++){
        wordfreq[words[i].key] = words[i].value;
   }
  return wordfreq;
} 


//////////Computing top 50 of most frequent words during the each time

var topOrganization = [];
var topPerson = [];
var topLocation = [];
var topMiscellaneous = [];

  blogs.values.sort(function(c,d){
        if(c.time>d.time) return 1;
        else if(c.time<d.time) return -1;
        else return 0;
      });
    


var monthItr = [];

  for(var i = 0 ; i < blogs.values.length; i++){
    blogs.values[i].person = blogs.values[i].person.split('|');
    blogs.values[i].location = blogs.values[i].location.split('|');
    blogs.values[i].miscellaneous = blogs.values[i].miscellaneous.split('|');
    blogs.values[i].organization = blogs.values[i].organization.split('|');
    topOrganization.push(blogs.values[i].organization);
    topLocation.push(blogs.values[i].location);
    topMiscellaneous.push(blogs.values[i].miscellaneous);
    topPerson.push(blogs.values[i].person);
  }
 

  //Frequency of each element
  topOrganization = frequency(topOrganization);
  topPerson = frequency(topPerson);
  topLocation = frequency(topLocation);
  topMiscellaneous = frequency(topMiscellaneous);

  
   //top 50 frequency of each categories
  top50Location = highFrequency(topLocation,20);
  top50Person = highFrequency(topPerson,20);
  top50Miscellaneous = highFrequency(topMiscellaneous,5);
  top50Organization =  highFrequency(topOrganization,5);
 
debugger;
//timeseries data

// lt = {};

// for(var i = 0 ; i < blogs.values.length;i++){
//   var temp = []
//   for(var l in top50Location){
//     if(blogs.values[i].location.includes(l))
//     {
//       if(lt[blogs.values[i].time]== undefined)
//         {temp.push(l);
//           lt[blogs.values[i].time] = temp;
//           lt[blogs.values[i].time][l] = 1;
//         }
//       else
//         { if(lt[blogs.values[i].time].includes(l))
//              lt[blogs.values[i].time][l] =  lt[blogs.values[i].time][l] + 1;
//              else
//               {
//                 lt[blogs.values[i].time].push(l);
//                 lt[blogs.values[i].time][l] = 1;
//               }
//             }
//           }
//         }
//     }

// lt = {};
//   for(var i = 0 ; i < blogs.values.length;i++){
//   var temp = []
//   for(var l in top50Person){
//     if(blogs.values[i].person.includes(l))
//     {
//       if(lt[blogs.values[i].time]== undefined)
//         {temp.push(l);
//           lt[blogs.values[i].time] = temp;
//           lt[blogs.values[i].time][l] = 1;
//         }
//       else
//         { if(lt[blogs.values[i].time].includes(l))
//              lt[blogs.values[i].time][l] =  lt[blogs.values[i].time][l] + 1;
//              else
//               {
//                 lt[blogs.values[i].time].push(l);
//                 lt[blogs.values[i].time][l] = 1;
//               }
//             }
//           }
//         }
//     }
  

//   for(var i = 0 ; i < blogs.values.length;i++){
//   var temp = []
//   for(var l in top50Organization){
//     if(blogs.values[i].organization.includes(l))
//     {
//       if(lt[blogs.values[i].time]== undefined)
//         {temp.push(l);
//           lt[blogs.values[i].time] = temp;
//           lt[blogs.values[i].time][l] = 1;
//         }
//       else
//         { if(lt[blogs.values[i].time].includes(l))
//              lt[blogs.values[i].time][l] =  lt[blogs.values[i].time][l] + 1;
//              else
//               {
//                 lt[blogs.values[i].time].push(l);
//                 lt[blogs.values[i].time][l] = 1;
//               }
//             }
//           }
//         }
//     }

//     for(var i = 0 ; i < blogs.values.length;i++){
//   var temp = []
//   for(var l in top50Miscellaneous){
//     if(blogs.values[i].miscellaneous.includes(l))
//     {
//       if(lt[blogs.values[i].time]== undefined)
//         {temp.push(l);
//           lt[blogs.values[i].time] = temp;
//           lt[blogs.values[i].time][l] = 1;
//         }
//       else
//         { if(lt[blogs.values[i].time].includes(l))
//              lt[blogs.values[i].time][l] =  lt[blogs.values[i].time][l] + 1;
//              else
//               {
//                 lt[blogs.values[i].time].push(l);
//                 lt[blogs.values[i].time][l] = 1;
//               }
//             }
//           }
//         }
//     }

//   // time = [];
// tf = {};
// for(var l in top50Location){
//   var temp = []
//   for(var i = 0 ; i < blogs.values.length;i++){
//     if(blogs.values[i].location.includes(l))
//     {temp.push(blogs.values[i].time);
//     tf[l] = temp;}
//     }
//     // time = [];
//   }

  // debugger;
//////////Computing relationship of top 50 of most frequent words during the each time

  var Persons = {
    nodes: [],
    links: []
  };



  // //blog id of each 50 top frequency
  var personBlogs = new Object();
  var organizationBlogs = new Object();
  var locationBlogs = new Object();
  var miscellaneousBlogs = new Object();
   
   
  for(var w in top50Person){
    var temp = [];
    for(var i = 0 ; i < blogs.values.length; i++){
      if(blogs.values[i].person.includes(w)){
        temp.push(i);
        personBlogs[w]=temp;
      }
    }
  }

  for(var w in top50Location){
    var temp = [];
    for(var i = 0 ; i < blogs.values.length; i++){
      if(blogs.values[i].location.includes(w)){
        temp.push(i);
        locationBlogs[w]=temp;
      }
    }
  }
  
   for(var w in top50Organization){
    var temp = [];
    for(var i = 0 ; i < blogs.values.length; i++){
      if(blogs.values[i].organization.includes(w)){
        temp.push(i);
        organizationBlogs[w]=temp;
      }
    }
  }

  for(var w in top50Miscellaneous){
    var temp = [];
    for(var i = 0 ; i < blogs.values.length; i++){
      if(blogs.values[i].miscellaneous.includes(w)){
        temp.push(i);
        miscellaneousBlogs[w]=temp;
      }
    }
  }

//relationship between person to pers
  var personPerson = new Object();
  for(var p in personBlogs){
    var temp = [];
    for(var l in personBlogs){
      for(var i = 0 ; i < personBlogs[p].length; i++){
        for(var j = 0 ; j < personBlogs[l].length; j++){
          if(p!=l)
          if(personBlogs[p][i] == personBlogs[l][j]){
            if(!temp.includes(l))
              temp.push(l);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      personPerson[p] = temp;
    }
  }

  

  //relationship between person to location
  var personLocation = new Object();
  for(var p in personBlogs){
    var temp = [];
    for(var l in locationBlogs){
      for(var i = 0 ; i < personBlogs[p].length; i++){
        for(var j = 0 ; j < locationBlogs[l].length; j++){
          if(personBlogs[p][i] == locationBlogs[l][j]){
            if(!temp.includes(l))
              temp.push(l);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      personLocation[p] = temp;
    }
  }


  //relationship between person to organization
  var personOrganziation = new Object();
  for(var p in personBlogs){
    var temp = [];
    for(var o in organizationBlogs){
      for(var i = 0 ; i < personBlogs[p].length; i++){
        for(var j = 0 ; j < organizationBlogs[o].length; j++){
          if(personBlogs[p][i] == organizationBlogs[o][j]){
           if(!temp.includes(o))
              temp.push(o);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
           
          } 
        }
      }
       personOrganziation[p] = temp;
    }
  }

  //relationship between person to miscellaneous
  var personMiscellaneous = new Object();
  for(var p in personBlogs){
    var temp = [];
    for(var m in miscellaneousBlogs){
      for(var i = 0 ; i < personBlogs[p].length; i++){
        for(var j = 0 ; j < miscellaneousBlogs[m].length; j++){
          if(personBlogs[p][i] == miscellaneousBlogs[m][j]){
            if(!temp.includes(m))
              temp.push(m);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
       personMiscellaneous[p] = temp;
    }
  }


//relationship between Location to location
  var locationLocation = new Object();
  for(var l in locationBlogs){
    var temp = [];
    for(var o in locationBlogs){
      for(var i = 0 ; i < locationBlogs[l].length; i++){
        for(var j = 0 ; j < locationBlogs[o].length; j++){
          if(o!=l)
          if(locationBlogs[l][i] == locationBlogs[o][j]){
           if(!temp.includes(o))
              temp.push(o);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      locationLocation[l] = temp;
    }
  }

  //relationship between Location to organization
  var locationOrganization = new Object();
  for(var l in locationBlogs){
    var temp = [];
    for(var o in organizationBlogs){
      for(var i = 0 ; i < locationBlogs[l].length; i++){
        for(var j = 0 ; j < organizationBlogs[o].length; j++){
          if(locationBlogs[l][i] == organizationBlogs[o][j]){
            if(!temp.includes(o))
              temp.push(o);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      locationOrganization[l] = temp;
    }
  }
  

  //relationship between location to miscellaneous
  var locationMiscellaneous = new Object();
  for(var l in locationBlogs){
    var temp = [];
    for(var m in miscellaneousBlogs){
      for(var i = 0 ; i < locationBlogs[l].length; i++){
        for(var j = 0 ; j < miscellaneousBlogs[m].length; j++){
          if(locationBlogs[l][i] == miscellaneousBlogs[m][j]){
          if(!temp.includes(m))
              temp.push(m);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      locationMiscellaneous[l] = temp;
    }
  }

  //relationship between location to miscellaneous
  var miscellaneousMiscellaneous = new Object();
  for(var l in miscellaneousBlogs){
    var temp = [];
    for(var m in miscellaneousBlogs){
      for(var i = 0 ; i < miscellaneousBlogs[l].length; i++){
        for(var j = 0 ; j < miscellaneousBlogs[m].length; j++){
          if(m!=l)
          if(miscellaneousBlogs[l][i] == miscellaneousBlogs[m][j]){
           if(!temp.includes(m))
              temp.push(m);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      miscellaneousMiscellaneous[l] = temp;
    }
  }


    //relationship between organization to miscellaneous
  var organizationMiscellaneous = new Object();
  for(var o in organizationBlogs){
    var temp = [];
    for(var m in miscellaneousBlogs){
      for(var i = 0 ; i < organizationBlogs[o].length; i++){
        for(var j = 0 ; j < miscellaneousBlogs[m].length; j++){
          if(organizationBlogs[o][i] == miscellaneousBlogs[m][j]){
             if(!temp.includes(m))
              temp.push(m);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      organizationMiscellaneous[o] = temp;
    }
  }

     //relationship between organization to organization
  var organizationOrganization = new Object();
  for(var o in organizationBlogs){
    var temp = [];
    for(var m in organizationBlogs){
      for(var i = 0 ; i < organizationBlogs[o].length; i++){
        for(var j = 0 ; j < organizationBlogs[m].length; j++){
          if(o!=m)
          if(organizationBlogs[o][i] == organizationBlogs[m][j]){
           if(!temp.includes(m))
              temp.push(m);
            //  if(temp[l]==undefined){
            //   temp[l] = 1
            // }
            // else{
            //   temp[l]++;
            // }
          } 
        }
      }
      organizationOrganization[o] = temp;
    }
  }


 for(p in top50Person){
 var temp = personPerson[p].concat(personLocation[p]).concat(personMiscellaneous[p]).concat(personOrganziation[p]);
      Persons.nodes.push({
        "name": p,
        "size": top50Person[p],
        "imports": temp
      });
    }
    

  
    for(p in top50Location){
      var temp = locationLocation[p].concat(locationMiscellaneous[p]).concat(locationOrganization[p]);
      Persons.nodes.push({
        "name": p,
        "size": top50Location[p],
        "imports": temp
      });
    }

    
    for(p in top50Organization){
      var temp = organizationOrganization[p].concat(organizationMiscellaneous[p]);
      Persons.nodes.push({
        "name": p,
        "size": top50Organization[p],
        "imports": temp
      });
    }



    for(p in top50Miscellaneous){
      Persons.nodes.push({
        "name": p,
        "size": top50Miscellaneous[p],
        "imports": miscellaneousMiscellaneous[p]
      });
    }

    debugger;

    // var id = 0;
    // for(p in top50Person){
    //   Persons.nodes.push({
    //     "name": p,
    //     "count": top50Person[p],
    //     "id": id,
    //     "group": 1
    //   });
    //   id++;
    // }
    
    // for(l in top50Location){
    //   Persons.nodes.push({
    //     "name": l,
    //     "count": top50Location[l],
    //     "id": id,
    //     "group": 2
    //   });
    //   id++;
    // }
    
    //  for(o in top50Organization){
    //   Persons.nodes.push({
    //     "name": o,
    //     "count": top50Organization[o],
    //     "id": id,
    //     "group": 3
    //   });
    //   id++;
    // }
    
    //  for(m in top50Miscellaneous){
    //   Persons.nodes.push({
    //     "name": m,
    //     "count": top50Miscellaneous[m],
    //     "id": id,
    //     "group": 4
    //   });
    //   id++;
    // }

// for(var k = 0 ; k < Persons.nodes.length; k++){
//   for(var p in personLocation){
//     if(Persons.nodes[k].name==p){
//        for(var i in personLocation[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":personLocation[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in personPerson){
//     if(Persons.nodes[k].name==p){
//        for(var i in personPerson[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":personPerson[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in locationLocation){
//     if(Persons.nodes[k].name==p){
//        for(var i in locationLocation[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":locationLocation[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in organizationOrganization){
//     if(Persons.nodes[k].name==p){
//        for(var i in organizationOrganization[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":organizationOrganization[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in miscellaneousMiscellaneous){
//     if(Persons.nodes[k].name==p){
//        for(var i in miscellaneousMiscellaneous[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":miscellaneousMiscellaneous[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in personOrganziation){
//     if(Persons.nodes[k].name==p){
//        for(var i in personOrganziation[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":personOrganziation[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in personMiscellaneous){
//     if(Persons.nodes[k].name==p){
//        for(var i in personMiscellaneous[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":personMiscellaneous[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }

//   for(var p in locationOrganization){
//     if(Persons.nodes[k].name==p){
//        for(var i in locationOrganization[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":locationOrganization[p][i]


//                   })
//           }
//         }
//       }
//     }
//   }
//   for(var p in locationMiscellaneous){
//     if(Persons.nodes[k].name==p){
//        for(var i in locationMiscellaneous[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value":locationMiscellaneous[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }
  
//   for(var p in organizationMiscellaneous){
//     if(Persons.nodes[k].name==p){
//        for(var i in organizationMiscellaneous[p]){
//         for(var k1 = 0 ; k1 < Persons.nodes.length; k1++){
//                 if(i==Persons.nodes[k1].name){
//                     Persons.links.push({
//                     "source": Persons.nodes[k].id,
//                     "target": Persons.nodes[k1].id,
//                     "value": organizationMiscellaneous[p][i]
//                   })
//           }
//         }
//       }
//     }
//   }
// }


// keys = {};
// debugger;
// Persons.links.forEach(function(d){
//  var temp = [];
//  if(!keys[d.source])
//     {temp.push(d.value); keys[d.source] = temp;}
//  else
//   keys[d.source].push(d.value);

// })

// Persons.links.forEach(function(d){
//   keys[d.source] = keys[d.source].sort(function(a,b){return b-a;}); 
//   keyLength = keys[d.source].length;
//   keys[d.source] =  keys[d.source].slice(0,40); 
// })

// Persons.links = Persons.links.filter(function(d){
//     return (keys[d.source].includes(d.value) && d.value > 20);
// })

// Persons.links.sort(function(a,b){return a.value - b.value;});
// Persons.links.forEach(function(a){
//   for(var s = 0 ; i < id ; i++){
//     if(a.source == i || a.target == i)

//   }
  
// debugger;
// Nlinks = {key:[], links:[]};
// for(var k = 0 ; k < id; k++ ){
//   for(var i in Persons.links){
//     // if(Persons.links[i].source == k || Persons.links[i].target == k){
//         if(Persons.links[i].source == k){
//       // Nlinks.key.push(Persons.links[i].source) ;
//       Nlinks.links.push(Persons.links[i]); 
//    }
//   }
//   Nlinks.links = Nlinks.links.sort(function(a,b){return a.value - b.value;});
//    temp = {links:[]};
//   for(var t = Nlinks.links.length - 1 ; t > Nlinks.links.length - 50 ; t--)
//     { 
//       // temp.key = Nlinks.key;
//       temp.links.push(Nlinks.links[t]);}
//      // console.log(JSON.stringify(temp.links));
//       temp = {links:[]};

// }


// debugger;
// test = Nlinks.links.sort(function(a,b){return a.value - b.value;});


console.log(JSON.stringify(Persons.nodes));
postMessage({type: "end", links: Persons.nodes});
      
};





////Filtering based on the processing on search term
//jquery