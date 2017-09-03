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

    describe('enable()', () => {
        it('should enable disabled player', () => {
            const player = new Player({ enabled: false })

            player.enable()

            expect(player.isEnabled()).toEqual(true)
        })

        it('should not change state of enabled player', () => {
            const player = new Player({ enabled: true })

            player.enable()

            expect(player.isEnabled()).toEqual(true)
        })
    })

    describe('disable()', () => {
        it('should disable enabled player', () => {
            const player = new Player({ enabled: true })

            player.disable()

            expect(player.isEnabled()).toEqual(false)
        })

        it('should not change state of disabled player', () => {
            const player = new Player({ enabled: false })

            player.disable()

            expect(player.isEnabled()).toEqual(false)
        })
    })
})
