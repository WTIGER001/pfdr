module.exports = () => {
  var arrays = require('./core/attributes/named_arrays.json'); //(with path)
  var target = require('./core/attributes/targets.json'); //(with path)
  var subtargets = require('./core/attributes/subtargets.json'); //(with path)
  var rules = require('./core/attributes/rules.json'); //(with path)
  var books = require('./books.json'); //(with path)
  var skills = require('./core/skills/skills.json')

  var data = Object.assign({}, arrays, target, subtargets, books, rules, skills);

  var fighter = require('./core/classes/fighter.json'); //(with path)
  var archer = require('./core/classes/archer.json'); //(with path)

  var dwarf = require('./core/races/dwarf.json'); //(with path) 

  data.classes = [];
  data.classes.push(fighter);
  data.classes.push(archer);

  data.races = [];
  data.races.push(dwarf)

  all = {}
  all.database = data

  return all
}
