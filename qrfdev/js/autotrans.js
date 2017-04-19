var autotrans = window.autotrans || {};

autotrans.jsonLocation = window.location.pathname+'.json';

autotrans.language = 'en';

autotrans.setLanguage = function(lang){
    if(typeof(lang)==='string'){
        autotrans.language = lang;
    }else{
        autotrans.language = autotrans.getBroswerLanguage();
    }
};

autotrans.getBroswerLanguage = function(){
    if (window.navigator.languages != undefined) 
        return window.navigator.languages[0]; 
    else 
        return window.navigator.language;
};

autotrans.translate = function(){
    
};

autotrans.getTranslationData = function(callback){
    
};

autotrans.ajaxGet = function(url, callback){
    /*global ActiveXObject*/
    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
    try{
      xhr = new XMLHttpRequest();
    }catch(e){
      try{
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      }catch(e){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    if(!xhr) return null;
    xhr.open("GET", url,true);
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && callback){
        callback(xhr.responseText);
      }
    };
    xhr.send(null);
    return xhr;
};