import Player from '../../../src/Shared/Domain/Player'

describe('Player', () => {
    describe('renderName()', () => {
        it('should render players full name', () => {
            const player = new Player({
                firstname: 'Bob',
                lastname: 'Jenkins',
                nickname: 'Fluffykins'
            })

            expect(player.renderName()).toEqual(`Bob 'Fluffykins' Jenkins`)
        })

        it('should not render players empty names', () => {
            const player = new Player({
                firstname: '   ',
                lastname: 'Jenkins',
                nickname: null
            })

            expect(player.renderName()).toEqual(`Jenkins`)
        })
    })
})
