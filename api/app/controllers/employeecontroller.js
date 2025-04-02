import Employee from '../models/employee.js'

const EmployeeController = {
    async index(req, res) {
        try {
            await EmployeeController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const employees = await Employee.findAll()
        res.status(200)
        res.json({
            success: true,
            data: employees
        })
    },
    async show(req, res) {
        try {
            await EmployeeController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const employee = await Employee.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: employee
        })
    },
    async create(req, res) {
        try {
            await EmployeeController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const employee = await Employee.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: employee
        })
    },
    async update(req, res) {
        try {
            await EmployeeController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Employee.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const employee = await Employee.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: employee
        })
    },
    async destroy(req, res) {
        try {
            await EmployeeController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const employee = await Employee.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: employee
        })
    }
}

export default EmployeeController