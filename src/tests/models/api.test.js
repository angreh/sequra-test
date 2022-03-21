const assert    = require( 'assert' ).strict,
      axios     = require('axios')

describe("Testing api endpoint", () => {
    it("should return nothing when merchantID is invalid", async () => {
        const result = await axios.get('http://localhost:8080/api/disbursements/a')
        assert.deepEqual([], result.data)
        assert.strictEqual(200, result.status)
    })
})