class controller
{
    constructor(req, res, next)
     
     {
         this.req = req;
         this.res= res;
         this.next= next;
     }
}

module.exports=controller;