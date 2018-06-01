exports.homePage = (req, res, next) => {
    res.render('index', 
      { title: 'Lab4',
      message: 'hello world',
        
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
    const description = 'Erick likes to work outside'

    //display it on a page along with number
  res.render('erick', 
    { title: 'Erick',
    description,
    });
};
 
exports.kee= (req, res, next) => {
    //calculate some random number
    const description = 'kee is friggin awesome'

    //display it on a page along with number
  res.render('kee', 
    { title: 'Kee',
    description,
    });
};

 
exports.deanna= (req, res, next) => {
    //calculate some random number
    const description = 'Love mom!'

    //display it on a page along with number
  res.render('deanna', 
    { title: 'Deanna',
    description,
    });
};