var path = require('path');
var exec = require('child_process').exec
var assetsFrontendRoot = path.resolve('node_modules', 'assets-frontend');

var build = exec('npm run build', {cwd: assetsFrontendRoot}, function (error, stdout, stderr) {
  if (error) {
    console.error('exec error:' + error);
    return;
  }
});

build.stdout.on('data', function(data) {
  process.stdout.write(data.toString());
});

build.stderr.on('data', function(data) {
  process.stdout.write(data.toString());
});
