const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');
const findTextAge = require('../../helpers/findTextAge');

describe('Checking the aditional functionality', function () {

    describe('Check age', function () {

        it('TC-0001 Check is correct for age in the texts', function () {
            browser.url('');
            for(let i = 0; i < data.checkAge.length; i++){
                inputValues4AndClick(data.name.Hero159, data.gender.she[0], data.checkAge[i], data.storyType.Comedy[0]);
                let testAge = findTextAge();
                expect(testAge).toEqual(exp.age[i]);
                $(sel.tryAgainK).click();
            }

        });

    });

});