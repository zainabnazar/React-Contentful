import App from './App';
import Flowers from './Flowers';


describe('Running component <App>', () => {
  it('mounts', () => {
    cy.mount(<App />)
  })
})


describe('Running component <Flowers>', () => {
  it('mounts', () => {
    cy.mount(<Flowers />);
    cy.get('[data-cy=App]').contains('Flowers');
  })
})