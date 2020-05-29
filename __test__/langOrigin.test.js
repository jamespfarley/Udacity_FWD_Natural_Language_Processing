const langOrigin = require("../src/client/js/langOrigin");

test('return language = ENGLISH passing abbrev = en', () => {
    expect(langOrigin.getCountryOrigin('en')).toBe('English');
});
