import { Model, DataTypes } from 'sequelize';
import sequelize from '../path_to_your_sequelize_instance'; // import your Sequelize instance

class ActionDataList extends Model {}

ActionDataList.init(
  {
    actionBy: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'ActionDataList',
    tableName: 'actionDataLists'
  }
);

export default ActionDataList;
