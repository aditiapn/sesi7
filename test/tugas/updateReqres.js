const assert = require('assert');


describe('API AUTOMATION',function() {
    it('Update user should be success', async function () {
        this.timeout(5000)
        const url = 'https://reqres.in/api/users/2'
        const requestData = {
            "name": "Aditia",
            "job": "QA Engineer",
            "updatedAt": "2025-02-18T10:08:36.768Z"
        };

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

      
        //console.log("Response : " + JSON.stringify(Responsedata, null, 1));
        assert.strictEqual(response.status, 200, "Status harus 200");
        assert.strictEqual(Responsedata.name, "Aditia");
        assert.strictEqual(Responsedata.job, "QA Engineer");
    })
})