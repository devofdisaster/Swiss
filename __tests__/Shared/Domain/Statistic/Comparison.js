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

    describe('isLowerThan()', () => {
        it('should be true if count of positive points is lower', () => {
            const compared = new Comparison({ plus: 15, minus: 0 })

            expect(comparison.isLowerThan(compared)).toEqual(true)
        })

        it('should be false if count of positive points is higher', () => {
            const compared = new Comparison({ plus: 5, minus: 0 })

            expect(comparison.isLowerThan(compared)).toEqual(false)
        })

        it('should be true if count of positive points is equal and negative is higher', () => {
            const compared = new Comparison({ plus: 10, minus: 0 })

            expect(comparison.isLowerThan(compared)).toEqual(true)
        })

        it('should be false if count of positive points is equal and negative is equal', () => {
            const compared = new Comparison({ plus: 10, minus: 5 })

            expect(comparison.isLowerThan(compared)).toEqual(false)
        })

        it('should be false if count of positive points is equal and negative is lower', () => {
            const compared = new Comparison({ plus: 10, minus: 10 })

            expect(comparison.isLowerThan(compared)).toEqual(false)
        })
    })
})
