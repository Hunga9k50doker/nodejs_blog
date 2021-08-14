
module.exports = {
        sum: (a,b) => a+b,
        sortable: (field,sort) => {
          const sortType = field === sort.column ? sort.type : 'default';
          const icons ={
            default:'fas fa-sort',
            asc: 'fas fa-sort-amount-down-alt',
            desc: 'fas fa-sort-amount-up',  
          };
    
          const types ={
            default:'desc',
            asc: 'desc',
            desc: 'asc',
          };
          
          const icon = icons[sortType];
          const type = types[sortType];
          Handlebars.escapeExpression(text) 
          return `<a href="?_sort&column=${field}&type=${type}">
                       <i class="${icon}"></i>
                  </a>`;
        }
      
};  