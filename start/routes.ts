/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

// router.post(/dashboard).render('pages/dashboard')
router.get('/dashboard', async (ctx) => {
  return ctx.view.render('pages/dashboard')
})
