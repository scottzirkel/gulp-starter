// module.exports = {
//   projectName: 'PROJECT_NAME',
//   repo: 'HTTPS REPO URL',
//   staging: {
//     servers: 'USERNAME@SERVER',
//     deployTo: '/absolute/path/to/www/root'
//   },
//   production: {
//     servers: 'USERNAME@SERVER',
//     deployTo: '/absolute/path/to/www/root'
//   }
// };


module.exports = {
  projectName: 'gulp-starter',
  repo: 'https://github.com/scottzirkel/gulp-starter.git',
  staging: {
    servers: 'tagnetdev@70.32.76.228',
    deployTo: '/var/www/vhosts/alaradevelopment.com/gulp-starter.alaradevlopment.com',
    branch: 'shipit'
  },
  production: {
    servers: 'USERNAME@SERVER',
    deployTo: '/absolute/path/to/www/root'
  }
};
