var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true, duplicates: true });
