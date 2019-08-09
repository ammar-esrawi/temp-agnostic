

//menu items user
var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    { "id": "1", "iconClass": "fa fa-fw fa-map", "label": "Map", "route": "#/main", "active": "true" },
    { "id": "2", "iconClass": "fa fa-fw fa-sliders", "label": "Dashboard", "route": "#/dashboard-home", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-file", "label": "Reports", "route": "#/reports", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-warning", "label": "Alerts", "route": "#/alerts", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-info-circle", "label": "Info", "route": "#/info", "active": "false" },
  ]
};
//menu items admin
var menuItemsAdmin = {
  "mainMenu": "menu1",
  "menu1": [
    { "id": "1", "iconClass": "fa fa-fw fa-map", "label": "Map", "route": "#/main", "active": "true" },
    { "id": "2", "iconClass": "fa fa-fw fa-sliders", "label": "Dashboard", "route": "#/dashboard-home", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-file", "label": "Reports", "route": "#/reports", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-warning", "label": "Alerts", "route": "#/alerts", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-gear", "label": "Control", "route": "#/control", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-info", "label": "A.I", "route": "#/ai", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-user-plus", "label": "Add Device", "route": "#/add-device", "active": "false" },
    { "id": "3", "iconClass": "fa fa-fw fa-list-alt", "label": "Add Rule", "route": "#/rules", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-info-circle", "label": "Info", "route": "#/info", "active": "false" },
  ]
};

var headerItems = {
    "logo": "https://i.ibb.co/TmfS643/logo-450.png",
    "items": [],
    "subitems": [
        {"id":"1", "iconClass":"fa fa-bell", "label": "Notification Settings", "route":"#/notifications", "active":"false"} 
    ], 
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"},
  "appname":"CxC App Factory"
};

var routingItems = {
  "params": [
    {"route": "map", "template": "/app/view/html/views/map/map.html", "controller": "mapCtrl as vm"},
    {"route": "map/deviceId/:deviceId*", "template": "/app/view/html/views/map/map.html", "controller": "mapCtrl as vm"},
    {"route": "dashboard/deviceId/:deviceId*", "template": "/app/view/html/views/dashboard/dashboard.html","controller": "dashboardCtrl as vm"},
    {"route": "alerts/deviceId/:deviceId*", "template": "/app/view/html/views/logs/alerts.html","controller": "alertsCtrl as vm"},
    {"route": "notifications", "template": "/app/view/html/views/notifications/notifications.html", controller: "notificationCtrl as vm"},
    {"route": "rules", "template": "/app/view/html/views/genericRules/genericAllRule.html", controller: "rulesCtrl as vm"},    
    {"route": "logout", "template": "/app/view/html/logout.html"},  
    { "route": "dashboard-home", "template": "/smart-water/view/html/views/dashboard/dashboard-home.html", controller: "dashboardHomeCtrl as vm" },
    { "route": "reports", "template": "/smart-water/view/html/views/reports/reports.html", controller: "reportsCtrl as vm" },
    { "route": "control", "template": "/smart-water/view/html/views/control/control.html", controller: "controlCtrl as vm" },
    { "route": "ai", "template": "/smart-water/view/html/views/ai/ai.html", controller: "aiCtrl as vm" },
    { "route": "add-device", "template": "/smart-water/view/html/views/devices/add-device.html", controller: "addDeviceCtrl as vm" },
    { "route": "info", "template": "/smart-water/view/html/views/info/info.html", controller: "infoCtrl as vm" },
    { "route": "404", "template": "/smart-water/view/html/views/404/404.html" },
  ]
};
