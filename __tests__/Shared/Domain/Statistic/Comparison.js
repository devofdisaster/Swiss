import Comparison from '../../../../src/Shared/Domain/Statistic/Comparison'

describe('Comparison', () => {
    const comparison = new Comparison({ plus: 10, minus: 5})

    describe('renderName()', () => {
        it('should render comparison name', () => {
            expect(comparison.renderName()).toEqual(`+/-`)
        })
    })

    describe('toString()', () => {
        it('should render comparison value', () => {
            expect(comparison.toString()).toEqual(`10/5`)
        })
    })
})
