import Results from '../../../../src/Shared/Domain/Statistic/Results'

describe('Results', () => {
    const points = new Results({ wins: 3, draws: 1, losses: 1})

    describe('renderName()', () => {
        it('should render results name', () => {
            expect(points.renderName()).toEqual(`W-D-L`)
        })
    })

    describe('toString()', () => {
        it('should render results value', () => {
            expect(points.toString()).toEqual('3-1-1')
        })
    })
})




