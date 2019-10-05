const data = [];

module.exports = class Data {
    constructor(u,p) {
        this.user = u;
        this.pass = p;
    }
    save() {
        data.push(this);
    }

    static fetchAll() {
        return data;
    }

}