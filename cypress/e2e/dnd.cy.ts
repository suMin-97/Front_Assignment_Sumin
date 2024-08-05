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

  it('하나의 Column 내에서 DnD 가능', () => {
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

  it('하나의 Column에서 다른 여러 칼럼으로 DnD 가능', () => {
    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-2')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
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

    cy.get('#Column-2').should('contain', 'item 2');
    cy.get('#Column-3').should('contain', 'item 0');
    cy.get('#Column-4').should('contain', 'item 5');
  });

  it('Column-1에서 Column-3으로 이동 불가', () => {
    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-2')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-6')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#Column-3').should('not.contain', 'item 0');
    cy.get('#Column-3').should('not.contain', 'item 2');
    cy.get('#Column-3').should('not.contain', 'item 6');

    cy.get('#Column-1').should('contain', 'item 0');
    cy.get('#Column-1').should('contain', 'item 2');
    cy.get('#Column-1').should('contain', 'item 6');
  });

  it('같은 Column 내에서 짝수 위치 아이템을 짝수 위치 아이템 앞 이동 금지', () => {
    cy.get('#item-1')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-0').next().should('contain', 'item 1');
  });

  it('다른 Column으로 이동 시 짝수 위치 아이템을 짝수 위치 아이템 앞 이동 금지', () => {
    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-1')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-2')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-3')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-5')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#Column-2').should('not.contain', 'item 5');
    cy.get('#Column-1').should('contain', 'item 5');
  });

  it('짝수 위치 아이템을 짝수 위치의 마지막 요소로 이동 가능', () => {
    cy.get('#item-0')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-1')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-2')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#item-4')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#Column-1').should('not.contain', 'item 4');
    cy.get('#Column-2').should('contain', 'item 4');
  });

  it('짝수 위치 아이템을 Drag해서 원래 위치로 Drop 가능', () => {
    cy.get('#item-1')
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowLeft, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowLeft, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowLeft, force: true })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });

    cy.get('#Column-1').should('contain', 'item 1');
  });
});
