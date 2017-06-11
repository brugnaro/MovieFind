var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies: function(movie){
        //var root = 'https://api.github.com';
        /*var root = 'https://jsonplaceholder.typicode.com';
        
        $.ajax({
        url: root + '/users?q='+movie.title,
        method: 'GET'
        }).then(function(data) {
        console.log(data);
        });*/

        $.ajax({
            url: 'http://www.omdbapi.com/?i='+movie.title,
            dataType: 'json',
            cache: false,
            success: function(data){
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, err){
                alert(err);
            }.bind(this)
        });
    }
}