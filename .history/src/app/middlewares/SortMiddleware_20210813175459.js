module.exports =function SortMiddleware(req, res, next){
    res.local._sort={
        enable: false,
        type: 'default',
        
    } 
    if(req.query.hasOwnProperty('_sort')){
        res.local.enable =true,
        res.local.type =true,
        res.local.enable =true,

    }

    next();
}