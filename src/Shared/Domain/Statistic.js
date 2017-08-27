export default class Statistic {
    static renderName(key) {
        switch(key) {
            case 'comparison':
                return '+/-'
            case 'games':
                return 'Games'
            case 'points':
                return 'Points'
            case 'results':
                return 'W-D-L'
            case 'sos':
                return 'SoS'
            case 'ssos':
                return 'SSoS'
            default:
                throw new Error('Nonexistant key')
        }
    }

    renderName() {
        return Statistic.renderName(this.key)
    }

    constructor(key, value) {
        this.key = key
        this.value = value
    }

    toString() {
        return `${this.value || 0}`
    }
}

