let express = require('express'),
    routes = require('./index');
let router = express.Router(),
    path = '../app/controller/';
function ParseController(controllerStr) {
    let valueArray = controllerStr.split('.'),
        nameOfController = valueArray[0],
        nameOfAction = valueArray[1];
        return [require(path + nameOfController), nameOfAction]
}

for (let key in routes) {
    let keyArray = key.split(' '),
        routeMethods = keyArray[0];
    let [controller, action] = ParseController(routes[key]);
    switch (true) {
        case /^GET/.test(routeMethods):
            routeMethods = keyArray[1];
            router.get(routeMethods, controller[action]);
            break;
        case /^POST/.test(routeMethods):
            routeMethods = keyArray[1];
            router.post(routeMethods, controller[action]);
            break;
        case /^PUT/.test(routeMethods):
            routeMethods = keyArray[1];
            router.put(routeMethods, controller[action]);
            break;
        case /^DELETE/.test(routeMethods):
            routeMethods = keyArray[1];
            router.delete(routeMethods, controller[action]);
            break;
    }
}

module.exports = router;