module.exports = function(dir,ext,callback){
    //i don't like this part of the solution although i guess they weren't expecting type checking 
    if(typeof callback!=='function') callback('expected a function for first argument, received: '+typeof callback);
    else if(typeof dir!=='string') callback('expected a string for first argument, received: '+typeof dir);
    else if(typeof ext!=='string') callback('expected a string for first argument, received: '+typeof ext);
    else{
        var fs = require('fs');
        fs.readdir(dir,function(err,files){
            if(err) callback(err);
            else{
                if(ext!==''){
                    callback(null,files.filter(function(val){
                        if(val.match(new RegExp('\\.'+ext+'$','g'))){
                            return true;
                        }else return false;
                    }));
                }else{
                    callback(null,files.filter(function(val){
                        return true;
                    }));
                }
            }
        });
    }
};