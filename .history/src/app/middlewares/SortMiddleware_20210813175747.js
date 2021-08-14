module.exports =function SortMiddleware(req, res, next){
    res.local._sort={
        enable: false,
        type: 'default',
        
    } 
    if(req.query.hasOwnProperty('_sort')){
        // res.local.enable =true;
        // res.local.type =req.query.type;
        // res.local.columns = req.query.columns;
        Object.assign(res.local._sort,{
            
        })
    }

    next();
}