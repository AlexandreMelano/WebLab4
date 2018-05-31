exports.homePage = (req, res, next) => {
    res.render('index', 
      { title: 'Lesson4',
       
      });
  };
  
exports.alex= (req, res, next) => {
      //calculate some random number
      const description = 'Alex is a computer programmer'
  
      //display it on a page along with number
    res.render('alex', 
      { title: 'Alex',
      description,
      });
  };

   
exports.erick= (req, res, next) => {
    //calculate some random number
    const description = 'Alex is a computer programmer'

    //display it on a page along with number
  res.render('erick', 
    { title: 'Erick',
    description,
    });
};
 
exports.kee= (req, res, next) => {
    //calculate some random number
    const description = 'Alex is a computer programmer'

    //display it on a page along with number
  res.render('kee', 
    { title: 'Kee',
    description,
    });
};

 
exports.deanna= (req, res, next) => {
    //calculate some random number
    const description = 'Alex is a computer programmer'

    //display it on a page along with number
  res.render('deanna', 
    { title: 'Deanna',
    description,
    });
};