var user = require("user");
var http = require("http");
var log = require("log");

var file =  require("file");

var hogan = require("modules/hogan/hogan.js").Hogan;

log.info(JSON.stringify(request));

var serveTheme = function(html, data){
    var html = file.read(html);
    var fileContent = html.content;
    
    var template = hogan.compile(fileContent, {delimiters: '<% %>'});
    var compiledTemplate = template.render(data);
    response.setHeader("Access-Control-Allow-Credentials", "false");
    response.addHeaders(configuration.crossDomainHeaders);
    response.write(compiledTemplate);
    response.close();
}

return serveTheme("smart-water/view/javascript/layout.js")