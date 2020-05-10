const routeName = 'create-session'
let stripe

function setRoute(app, stripeObject) {
  stripe = stripeObject
  app.post(`/${routeName}`, routeHandler)
}

async function routeHandler(req, res) {
  try {
    const session = await stripe.createCheckoutSession(req.body)
    res.send({ sessionId: session.id })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  setRoute
}
