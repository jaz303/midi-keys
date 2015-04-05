var BASE = {
    'C'     : 24,
    'D'     : 26,
    'E'     : 28,
    'F'     : 29,
    'G'     : 31,
    'A'     : 33,
    'B'     : 35
};

var KEYS = {};
(function() {
    for (var octave = -2; octave <= 8; ++octave) {
        for (var k in BASE) {
            var key = BASE[k] + (octave * 12);
            KEYS[k + 'b' + octave] = key - 1;
            KEYS[k + octave] = key;
            KEYS[k + '#' + octave] = key + 1;
        }
    }
})();

module.exports = function(note) {
    return KEYS[note];
}
