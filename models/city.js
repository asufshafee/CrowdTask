/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cities', {
    pk_city_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_country_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cities'
  });
};
