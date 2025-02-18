const assert = require('assert');

describe('API AUTOMATION',function() {

    it('Get user should be success', async function () {
        this.timeout(5000)
        const response = await fetch('https://reqres.in/api/users/2')

        const Responsedata = await response.json()


        //console.log("Response API : " + JSON.stringify(Responsedata, null, 1));

        assert.strictEqual(response.status, 200)

    })

    it('Get invalid user should be error', async function () {
        this.timeout(5000)
        const response = await fetch('https://reqres.in/api/users/1000')

        const Responsedata = await response.json()


        //console.log("Response : " + JSON.stringify(Responsedata, null, 1))

        assert.strictEqual(response.status, 404)
    })

})