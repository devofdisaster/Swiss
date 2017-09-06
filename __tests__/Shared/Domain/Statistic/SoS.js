import SoS from '../../../../src/Shared/Domain/Statistic/SoS'

describe('SoS', () => {
    const sos = new SoS(10)

    describe('renderName()', () => {
        it('should render sos name', () => {
            expect(sos.renderName()).toEqual(`SoS`)
        })
    })

    describe('toString()', () => {
        it('should render sos value', () => {
            expect(sos.toString()).toEqual('10.000')
        })
    })
})




