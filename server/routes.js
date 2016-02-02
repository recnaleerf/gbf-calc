'use strict';

module.exports = function (app) {
    
    // Reserved for API routes e.g.
    // app.use('/api/things', require('./api/thing'));

    // Undefined asset or api routes should return a 404
    app.get('/:url(api|auth|components|app|assets)/*',
        function (req, res) {
            res.status(404).send('404 Not Found');
        }
    );

    app.get('/*', function (req, res) {
        res.sendFile(app.get('appRoot') + '/index.html');
    });
}
