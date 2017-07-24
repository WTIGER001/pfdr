module.exports = () => {
    var arrays = require('./core/attributes/named_arrays.json'); //(with path)
    var target = require('./core/attributes/targets.json'); //(with path)
    var subtargets = require('./core/attributes/subtargets.json'); //(with path)
    var data = Object.assign({}, arrays, target, subtargets);


    var fighter = require('./core/classes/fighter.json'); //(with path)
    var archer = require('./core/classes/archer.json'); //(with path)

    data.classes = [];
    data.classes.push(fighter);
    data.classes.push(archer);

    return data
}