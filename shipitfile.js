var chalk       = require('chalk'),
    d           = new Date(),
    day         = ("0" + d.getDate()).slice(-2),
    month       = ("0" + (d.getMonth() + 1)).slice(-2),
    year        = d.getFullYear(),
    datestamp   = month + day + year,
    config      = require('./shipitconfig'),
    workspace   = '../tmp/' + config.projectName,
    tmpFolder   = datestamp + config.projectName;

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
    workspace: workspace,
    repositoryUrl: config.repo,
    ignores: ['.git', 'node_modules'],
    keepReleases: 2,
    shallowClone: true
   },
    staging: config.staging,
    production: config.production
  });

  shipit.task('env', function () {
    if (shipit.environment === 'staging') {
      shipit.log(chalk.green('Staging!'));
    }

    shipit.stop();
  });

  /*
  Runs NPM in the workspace
  */

  shipit.blTask('npm', function () {
    shipit.log(chalk.green('Installing NPM'));
    return shipit.local('npm install', {cwd: '../tmp/' + config.projectName})
      .then(function () {
        shipit.log(chalk.green('NPM Installed'));
        shipit.emit('installed-npm');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to install NPM'));
        shipit.stop();
      });
  });

  /*
  Runs Bower in the workspace
  */
  shipit.blTask('bower', function () {
    shipit.log(chalk.green('Installing Bower'));
    return shipit.local('bower install', {cwd: '../tmp/' + config.projectName})
      .then(function () {
        shipit.log(chalk.green('Bower Installed'));
        shipit.emit('installed-bower');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to install Bower'));
        shipit.stop();
      });

  });

  /*
  Runs Gulp in the workspace
  */

  shipit.blTask('gulp', function () {
    shipit.log(chalk.green('Installing Gulp'));
    var gulpTask;
    if (shipit.environment === 'staging') {
      gulpTask = 'gulp build:staging';
    }
    if (shipit.environment === 'production') {
      gulpTask = 'gulp build:production';
    }
    return shipit.local(gulpTask, {cwd: '../tmp/' + config.projectName})
      .then(function () {
        shipit.log(chalk.green('Gulp Installed'));
        shipit.emit('installed-gulp');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to install Gulp'));
        shipit.stop();
      });
  });

  /*
  Builds a temporary directory to save build files outside of workspace
  */

  shipit.blTask('build-tmp', function () {
    shipit.log(chalk.green('Build tmp dir'));
    return shipit.local('if [ -f ' + tmpFolder + ']; then mkdir ' + tmpFolder + '; else rm -rf ' + tmpFolder + ' && mkdir ' + tmpFolder + '; fi', {cwd: '../tmp'})
      .then(function () {
        shipit.log(chalk.green('Build tmp created'));
        shipit.emit('tmp-built');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to build tmp'));
        shipit.stop();
      });
  });

  /*
  Copies build files to temporary folder
  */

  shipit.blTask('copy-build', function () {
    shipit.log(chalk.green('Copying build files'));
    return shipit.local('ditto build ../' + tmpFolder, {cwd: '../tmp/' + config.projectName})
      .then(function () {
        shipit.log(chalk.green('Build files copied'));
        shipit.emit('build-copied');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to copy build'));
        shipit.stop();
      });
  });

  /*
  Removes Source & Repo files from workspace
  */

  shipit.blTask('cleanup:source', function () {
    shipit.log(chalk.green('Cleanup Source Files'));
    return shipit.local('rm -rf *', {cwd: '../tmp/' + config.projectName})
      .then(function () {
        shipit.log(chalk.green('Source Files Removed'));
        shipit.emit('source-cleaned');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to clean source'));
        shipit.stop();
      });
  });

  /*
  Moves build files back into workspace
  */

  shipit.blTask('paste-build', function () {
    shipit.log(chalk.green('Pasting build files'));
    return shipit.local('ditto ' + tmpFolder + ' ' + config.projectName, {cwd: '../tmp'})
      .then(function () {
        shipit.log(chalk.green('Build files pasted'));
        shipit.emit('build-pasted');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to paste build'));
        shipit.stop();
      });
  });

  /*
  Removes temporary directory & workspace
  */

  shipit.task('cleanup:tmp', function () {
    shipit.log(chalk.green('Cleaning up local tmp folders'));
    return shipit.local('rm -rf ' + config.projectName + ' ' + tmpFolder, {cwd: '../tmp'})
      .then(function () {
        shipit.log(chalk.green('Cleaned up local tmp folders'));
        shipit.emit('tmp-cleaned');
      })
      .catch(function () {
        shipit.log(chalk.bgRed('Failed to cleanup local tmp'));
        shipit.stop();
      });
  });

  shipit.on('fetched', function () {
    shipit.start(['npm']);
  });

  shipit.on('installed-npm', function () {
    shipit.start(['bower']);
  });

  shipit.on('installed-bower', function () {
    shipit.start(['gulp']);
  });

  shipit.on('installed-gulp', function () {
    shipit.start(['build-tmp']);
  });

  shipit.on('tmp-built', function () {
    shipit.start(['copy-build']);
  });

  shipit.on('build-copied', function () {
    shipit.start(['cleanup:source']);
  });

  shipit.on('source-cleaned', function () {
    shipit.start(['paste-build']);
  });

  shipit.on('cleaned', function () {
    shipit.start('cleanup:tmp');
  });
};
