here=`pwd`
all: vtest

vtest:
	./fab/fab ${here}/verbatim.ohm ${here}/verbatim.fab ${here}/emptysupport.js <${here}/src.js \
	> junk.js
	@echo
	@echo '*** source file ***'
	@cat src.js
	@echo
	@echo
	@echo '*** transpiled file ***'
	@cat junk.js
	@echo
	@echo
	@echo '*** stripped file ***'
	@./vstrip <junk.js >junk2.js
	@cat junk2.js
	@echo

identity:
	./fab/fab ${here}/verbatim.ohm ${here}/identity-verbatim.fab ${here}/emptysupport.js <${here}/src.js


install: repos npmstuff

repos:
	multigit -r

npmstuff:
	npm install ohm-js yargs atob pako
