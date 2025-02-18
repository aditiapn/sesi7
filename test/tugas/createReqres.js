const assert = require('assert');


describe('API AUTOMATION',function() {
    it('Create user should be success', async function () {
        this.timeout(5000)
        const url = 'https://reqres.in/api/users'
        const requestData = {
            "name": "Aditia",
            "job": "QA",
            "id": "333",
            "createdAt": "2025-02-18T09:47:42.728Z"
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

      
        //console.log("Response : " + JSON.stringify(Responsedata, null, 1));
        assert.strictEqual(response.status, 201, "Status harus 201");
        assert.strictEqual(Responsedata.name, "Aditia");
        assert.strictEqual(Responsedata.job, "QA");
    })
})