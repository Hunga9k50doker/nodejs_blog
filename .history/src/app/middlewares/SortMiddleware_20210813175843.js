module.exports =function SortMiddleware(req, res, next){
    res.local._sort={
        enable: false,
        type: 'default',
        
    } 
    if(req.query.hasOwnProperty('_sort')){
        // res.local.enable =true;
        // res.local.type =req.query.type;
        // res.local.column = req.query.column;
        Object.assign(res.local._sort,{
            enable: true,
            type:req.query.type,
            column:req.query.column,
        });
    }

    next();
}