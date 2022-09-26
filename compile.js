function compile (s) {
    if (s) {
	return eval ('(' + s + ')');
    } else {
	return '<no value>';
    }
}

function loadAndRun (f) {
    if (f.run) {
	return f.run ();
    } else {
	return f;
    }
}
