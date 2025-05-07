import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Employee = sequelize.define('employee', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: true  },
    salary: { type: DataTypes.DOUBLE,  allowNull: true  },
})


sequelize.sync({
    force: false
})

export default Employee
