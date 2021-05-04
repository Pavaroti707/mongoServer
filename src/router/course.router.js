import express from 'express'
import ctrl from '../controllers/course.controller';

const router = express.Router();

router.route('/course')
.get(ctrl.list)
.post(ctrl.create);

router.route('/course/:id')
   .get(ctrl.read)
   .put(ctrl.update)
   .delete(ctrl.remowe);
export default router;