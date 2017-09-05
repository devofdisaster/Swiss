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

    constructor(key, value) {
        this._key = key
        this._value = value
    }

    getValue() {
        return this._value
    }

    isLowerThan(otherStat) {
        return this._value < otherStat.getValue()
    }

    isEqualTo(otherStat) {
        return this._value === otherStat.getValue()
    }

    renderName() {
        return Statistic.renderName(this._key)
    }

    toString() {
        return `${this._value || 0}`
    }
}

