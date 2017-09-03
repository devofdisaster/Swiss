import Results from '../../../../src/Shared/Domain/Statistic/Results'

describe('Results', () => {
    const results = new Results({ wins: 3, draws: 1, losses: 1})

    describe('renderName()', () => {
        it('should render results name', () => {
            expect(results.renderName()).toEqual(`W-D-L`)
        })
    })

    describe('toString()', () => {
        it('should render results value', () => {
            expect(results.toString()).toEqual('3-1-1')
        })
    })

    describe('isLowerThan()', () => {
        it('should be true if count of wins is lower', () => {
            const compared = new Results({ wins: 5, losses: 0, draws: 0 })

            expect(results.isLowerThan(compared)).toEqual(true)
        })

        it('should be false if count of wins is higher', () => {
            const compared = new Results({ wins: 2, losses: 2, draws: 1 })

            expect(results.isLowerThan(compared)).toEqual(false)
        })

        it('should be true if count of wins is equal and losses is higher', () => {
            const compared = new Results({ wins: 3, losses: 0, draws: 2 })

            expect(results.isLowerThan(compared)).toEqual(true)
        })

        it('should be false if count of wins is equal and losses is equal', () => {
            const compared = new Results({ wins: 3, losses: 1, draws: 1 })

            expect(results.isLowerThan(compared)).toEqual(false)
        })

        it('should be false if count of wins is equal and losses is lower', () => {
            const compared = new Results({ wins: 3, losses: 2, draws: 0 })

            expect(results.isLowerThan(compared)).toEqual(false)
        })
    })
})




