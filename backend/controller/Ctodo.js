const {Todo} = require('../models/index')

// Todo 추가
exports.postTodo = async (req, res) => {
    try {
        const {title, done} = req.body
        const newTodo = await Todo.create({
            title, done
        })
        res.json(newTodo)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

// Todo 전체 조회
exports.getTodoList = async (req, res) => {
    try {
        const todoList = await Todo.findAll()
        res.json(todoList)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 ID의 Todo 조회
exports.getTodo = async (req, res) => {
    try {
        const {id} = req.params
        const getTodo = await Todo.findOne({
            where : {
                id
            }
        })
        if (getTodo) res.json(getTodo)
            else res.json({message:'Todo not found'})
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 ID의 Todo 수정
exports.patchTodo = async (req, res) => {
    try {
        const {id} = req.params
        const {title, done} = req.body
        const patchTodo = await Todo.update(
            {title, done},
            {

                where : {id},
            }
        )
        if (patchTodo[0] === 1) {
            const patchedTodo = await Todo.findOne({
                where:{id}
            })

            res.json(patchedTodo)
        }
            else res.json({message:'Todo not found'})
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 ID의 Todo 삭제
exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        const deleteTodo = await Todo.destroy({
            where : {id}
        })
        if (deleteTodo === 1) res.json({deletedId:id, message:'Todo deleted successfully'})
            else res.json({message:'Todo not found'})
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}