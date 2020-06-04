const langOrigin = require("../src/client/js/langOrigin");

test('return language = ENGLISH passing abbrev = en', (done) => {
    expect(langOrigin.getCountryOrigin('en')).toBe('English');
    done();
});
