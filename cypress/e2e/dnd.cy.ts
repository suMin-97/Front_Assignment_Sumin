import * as keyCodes from '../../src/constants/key-codes';
import { timings } from '../../src/constants';
import { getHandleSelector } from './util';

describe('DnD 구현 과제 요구사항 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    cy.get('#columnCountUp').click();
    cy.get('#columnCountUp').click();
    cy.get('#columnCountUp').click();
  });

  afterEach(() => {
    cy.get('#columnCountDown').click();
    cy.get('#columnCountDown').click();
    cy.get('#columnCountDown').click();
  });

  it('하나의 column 내에서 DnD 가능', () => {
    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-0').next().should('contain', 'item 5');
  });

  it('하나의 column에서 다른 여러 칼럼으로 DnD 가능', () => {
    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-2')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-5')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#Column-1').should('not.contain', 'item 0');
    cy.get('#Column-1').should('not.contain', 'item 2');
    cy.get('#Column-1').should('not.contain', 'item 5');

    cy.get('#Column-2').should('contain', 'item 0');
    cy.get('#Column-3').should('contain', 'item 2');
    cy.get('#Column-4').should('contain', 'item 5');
  });
});
