/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    pk_country_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    },
    short_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    },
    mobile_code: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    }

  }, {
    tableName: 'country'
  });
};
