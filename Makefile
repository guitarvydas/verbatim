here=`pwd`
all: vtest

vtest:
	./fab/fab ${here}/verbatim.ohm ${here}/verbatim.fab ${here}/emptysupport.js <${here}/src.js

identity:
	./fab/fab ${here}/verbatim.ohm ${here}/identity-verbatim.fab ${here}/emptysupport.js <${here}/src.js


install: repos npmstuff

repos:
	multigit -r

npmstuff:
	npm install ohm-js yargs atob pako
