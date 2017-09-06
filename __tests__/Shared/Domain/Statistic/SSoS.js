import SSoS from '../../../../src/Shared/Domain/Statistic/SSoS'

describe('SSoS', () => {
    const ssos = new SSoS(10)

    describe('renderName()', () => {
        it('should render ssos name', () => {
            expect(ssos.renderName()).toEqual(`SSoS`)
        })
    })

    describe('toString()', () => {
        it('should render ssos value', () => {
            expect(ssos.toString()).toEqual('10.000')
        })
    })
})





