function compile (s) {
    console.log (s);
    return eval ('(' + s + ')');
}

function loadAndRun (f) {
    if (f.run) {
	return f.run ();
    } else {
	return f;
    }
}
