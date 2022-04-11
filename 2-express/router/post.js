import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(201).send('GET: /posts');
});

// 상위 루트 /posts는 호출할 때 이미 지정해둬서 /posts 뒤에 들어갈 것만 지정해주면 됨
// router.get('/all', (req, res) => { // 이렇게 하면 /posts/all임
//   res.status(201).send('GET: /posts');
// });

router.post('/', (req, res) => {
  res.status(201).send('POST: /posts');
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /posts:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /posts:id');
});

export default router;
