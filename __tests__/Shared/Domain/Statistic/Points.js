import Points from '../../../../src/Shared/Domain/Statistic/Points'

describe('Points', () => {
    const points = new Points(10)

    describe('renderName()', () => {
        it('should render points name', () => {
            expect(points.renderName()).toEqual(`pts.`)
        })
    })

    describe('toString()', () => {
        it('should render points value', () => {
            expect(points.toString()).toEqual('10')
        })
    })
})



