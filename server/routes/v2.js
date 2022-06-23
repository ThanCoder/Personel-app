const router = require('express').Router();

const controller = require('../controller')

//webnovel share data
router.get('/webnovel-sharedata',controller.webnovelShareDataController.getAll)
router.post('/webnovel-sharedata',controller.webnovelShareDataController.add)
router.put('/webnovel-sharedata/:id',controller.webnovelShareDataController.update)
router.delete('/webnovel-sharedata/:id',controller.webnovelShareDataController.delete)

//user
router.get('/user',controller.userController.getUsers)
router.get('/user/token-user',controller.userController.getTokenUser)
router.get('/user/id/:id',controller.userController.getUserById)
router.post('/user/login',controller.userController.login)
router.post('/user/register',controller.userController.register)

//novel app
router.get('/novel-app',controller.novelAppController.getAll);
router.get('/novel-app-latest',controller.novelAppController.getLatest);
router.post('/novel-app',controller.novelAppController.add);
router.delete('/novel-app/:id',controller.novelAppController.delete);

//Movie
// router.get('/movies',movieController.getMovies)
// router.get('/movie/:id',movieController.getMovie)
// router.post('/movie',movieController.addMovie)
// router.post('/movie-multiple',movieController.addMovieMultiple)
// router.put('/movie/:id',movieController.updateMovie)
// router.delete('/movie/:id',movieController.deleteMovie)

// //Apyar
// router.get('/apyars',apyarController.getApyars)
// router.get('/apyar/:id',apyarController.getApyar)
// router.post('/apyar',apyarController.addApyar)
// router.put('/apyar/:id',apyarController.updateApyar)
// router.delete('/apyar/:id',apyarController.deleteApyar)


// //webnovel
// router.get('/novels',webnovelController.getNovels)
// router.get('/novel/:id',webnovelController.getNovel)
// router.post('/novel',webnovelController.addNovel)
// router.put('/novel/:id',webnovelController.updateNovel)
// router.delete('/novel/:id',webnovelController.deleteNovel)

// router.get('/chapters',webnovelController.getAllChapters)
// router.get('/chapters/:id',webnovelController.getChapters)
// router.get('/chapter/:id',webnovelController.getChapter)
// router.post('/chapter',webnovelController.addChapter)
// router.put('/chapter/:id',webnovelController.updateChapter)
// router.delete('/chapter/:id',webnovelController.deleteChapter)

module.exports = router;