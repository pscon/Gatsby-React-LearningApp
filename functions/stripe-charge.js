


const stripe = require('stripe')('sk_test_51KlAbaFxGdSEpmZH1gloVyqqZkpLQjP8KgNaArCAgoeSR7FNRCMJBiMMfArtPMo0B0LP3Vnqi5it7HkbFREaulqv00x2XYAIsb')

exports.handler = async function (event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}