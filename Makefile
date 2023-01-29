here=`pwd`
all: vtest

vtest:
	./fab/fab ${here}/verbatim.ohm ${here}/verbatim.fab ${here}/emptysupport.js <${here}/src.js \
	| ./vstrip \
	> junk.js
	@echo
	@echo '*** source file ***'
	@cat src.js
	@echo
	@echo
	@echo '*** transpiled file ***'
	@cat junk.js
	@echo
	@node junk.js

identity:
	./fab/fab ${here}/verbatim.ohm ${here}/identity-verbatim.fab ${here}/emptysupport.js <${here}/src.js


install: repos npmstuff

repos:
	multigit -r

npmstuff:
	npm install ohm-js yargs atob pako
