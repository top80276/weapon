var wpmodel = require('../model/wpmodel');


exports.queryall = (req,res) => {
    wpmodel.queryall().then((data) => {
        data = JSON.parse(data);
        res.render('./wp/queryall',{wps:data});
    }).catch((err) => {
        console.log("Erroe: " + err);
    });

};

exports.powerasc = (req,res) => {
    wpmodel.powerasc().then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
}).catch((err) => {
    console.log("Erroe: " + err);
});
};

exports.powerdesc = (req,res) => {
    wpmodel.powerdesc().then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
}).catch((err) => {
    console.log("Erroe: " + err);
});
};

exports.lastingasc = (req,res) => {
    wpmodel.lastingasc().then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
}).catch((err) => {
    console.log("Erroe: " + err);
});
};

exports.lastingdesc = (req,res) => {
    wpmodel.lastingdesc().then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
}).catch((err) => {
    console.log("Erroe: " + err);
});
};

exports.priceasc = (req,res) => {
    wpmodel.priceasc().then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
}).catch((err) => {
    console.log("Erroe: " + err);
});
};

exports.pricedesc = (req,res) => {
    wpmodel.pricedesc().then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
}).catch((err) => {
    console.log("Erroe: " + err);
});
};


exports.search = (req,res) => {
    wpmodel.search(req.query.search).then((data) => {
        data = JSON.parse(data);
    res.render('./wp/queryall',{wps:data});
    }).catch((err) => {
        console.log("Erroe: " + err);
});
};


// exports.queryupdate1 = (req,res) => {
//     if (req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             var params = new URLSearchParams(body);
//             var empno = params.get('empno')
//             var ename = params.get('ename')
//             var hiredate = params.get('hiredate')
//             var salary = params.get('salary')
//             var deptno = params.get('deptno')
//             var title = params.get('title')
//             empmodel.queryupdate1(empno,ename,hiredate,salary,deptno,title).then((data) => {
//                 data = JSON.parse(data);
//                 res.render('./emp/queryupdate1',{emps:data});
//             }).catch((err) => {
//             console.log("Erroe: " + err);
//             });
//         });
//         }};




