// for in

var myObject = {
  x: 1,
  y: 2,
  z: 'test',
  myMethod: function () {
    console.log(this.x, this.y, this.z);
  }
}

for (var att in myObject) {
  console.log(att, typeof att, myObject[att]);
}
