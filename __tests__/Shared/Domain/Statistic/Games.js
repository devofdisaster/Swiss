import Games from '../../../../src/Shared/Domain/Statistic/Games'

describe('Games', () => {
    const games = new Games(3)

    describe('renderName()', () => {
        it('should render games name', () => {
            expect(games.renderName()).toEqual(`Games`)
        })
    })

    describe('toString()', () => {
        it('should render games value', () => {
            expect(games.toString()).toEqual('3')
        })
    })
})
