#!/usr/bin/env node

'use strict';
var program = require('commander');
var pkg = require('../package.json');
var webCapture = require('../lib');

program.version(pkg.version)
	.usage('url [options]')
	.option('-d, --debug')
	.parse(process.argv);

webCapture(program);