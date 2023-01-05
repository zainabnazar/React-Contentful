import ApiFetch from './ApiFetch';
import App from './App';

describe('Filling the form and submit it', () => {

    it('fill the form', () => {
        cy.mount(<ApiFetch />);
        cy.get('input[name="name"]').type('Jane');
        cy.get('input[name="age"]').type('20');
        cy.get('#user').submit()

    })
})

describe('Test the api post request', () => {

    it('test the api', () => {
        let res
        cy.request({
            method: 'POST',
            url: 'https://63b58eee0f49ecf508a90829.mockapi.io/names',
            body: { name: 'Mark', age: '23' },
        })
            .then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.name).to.equal('Mark');
                console.log(response)
            })

    })
})

