var scroungejs = require('scroungejs'),
    startutils = require('./startutil');

startutils.createFileIfNotExist({
  pathSrc : './test/indexSrc.html',
  pathFin : './test/index.html'
}, function (err, res) {
  if (err) return console.log(err);

  scroungejs.build({
    inputPath : [
      './test/testbuildSrc',
      './node_modules',
      './bttn.js'
    ],
    outputPath : './test/testbuildFin', 
    isRecursive : true,
    isSourcePathUnique : true,
    isCompressed : false,
    isConcatenated : false,
    basepage : './test/index.html'
  }, function (err, res) {
    return (err) ? console.log(err) : console.log('finished!');
  });

});

