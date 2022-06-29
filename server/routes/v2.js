const router = require('express').Router();

const controller = require('../controller')

//webnovel share data
router.get('/sharedata',controller.shareDataController.getAll)
router.post('/sharedata',controller.shareDataController.addOne)
router.put('/sharedata/:id',controller.shareDataController.updateOne)
router.delete('/sharedata/:id',controller.shareDataController.deleteOne)

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
router.put('/novel-app/:id',controller.novelAppController.update);
router.delete('/novel-app/:id',controller.novelAppController.delete);

//Movie
router.get('/movies',controller.movieController.getAll)
router.get('/movie',controller.movieController.getOne)
router.post('/movie',controller.movieController.addOne)
router.put('/movie/:id',controller.movieController.updateOne)
router.delete('/movie/:id',controller.movieController.deleteOne)

// //Apyar
router.get('/apyars',controller.apyarController.getAll)
router.get('/apyar',controller.apyarController.getOne)
router.post('/apyar',controller.apyarController.addOne)
router.put('/apyar/:id',controller.apyarController.updateOne)
router.delete('/apyar/:id',controller.apyarController.deleteOne)


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