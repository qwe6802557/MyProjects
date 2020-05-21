import { matchPath, Router, Switch, Route } from 'react-router';
import _extends from '@babel/runtime/helpers/esm/extends';
import React from 'react';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

function matchRoutes(routes, pathname,
/*not public API*/
    branch) {
    if (branch === void 0) {
        branch = [];
    }

    routes.some(function (route) {
        var match = route.path ? matchPath(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
            : Router.computeRootMatch(pathname); // use default "root" match

        if (match) {
            branch.push({
                route: route,
                match: match
            });

            if (route.routes) {
                matchRoutes(route.routes, pathname, branch);
            }
        }

        return match;
    });
    return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
    if (extraProps === void 0) {
        extraProps = {};
    }

    if (switchProps === void 0) {
        switchProps = {};
    }
    return routes ? React.createElement(CacheSwitch, switchProps, routes.map(function (route, i) {
        return React.createElement(CacheRoute, {
            key: route.key || i,
            path: route.path,
            exact: route.exact,
            strict: route.strict,
            cacheKey:route.path,
            when:'always',
            className:'cache-route-class',
            render: function render(props) {
                return route.render ? route.render(_extends({}, props, extraProps, {
                    route: route
                })) : React.createElement(route.component, _extends({}, props, extraProps, {
                    route: route
                }));
            }
        });
    })) : null;
}


export { matchRoutes, renderRoutes };
