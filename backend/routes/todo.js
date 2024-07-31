const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo')

// Todo 추가
router.post('/', controller.postTodo)

// Todo 전체 조회
router.get('/', controller.getTodoList)

// 특정 ID의 Todo 조회
router.get('/:id', controller.getTodo)

// 특정 ID의 Todo 수정
router.patch('/:id', controller.patchTodo)

// 특정 ID의 Todo 삭제
router.delete('/:id', controller.deleteTodo)

module.exports = router