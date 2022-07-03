var odmodel = require('../model/odmodel');




exports.buyone = (req,res) => {
        odmodel.buyone(req.query.wpid,req.query.number).then((data) => {
            // data = JSON.parse(data);
        // res.render('./emp/queryone',{emps:data});
    }).catch((err) => {
        // console.log("Erroe: " + err);
        res.send('輸入錯誤');
    });
};

exports.buyall = (req,res) => {
    odmodel.buyall().then((data) => {
        data = JSON.parse(data);
        // console.log(data);
        res.render('./od/buyall',{wps:data});
    }).catch((err) => {
        console.log("Erroe: " + err);
    });
};



exports.buydel = (req,res) => {
    odmodel.buydel(req.query.wpid).then((data) => {
    }).catch((err) => {
                console.log("Erroe: " + err);
    });
odmodel.buyall().then((data) => {
    data = JSON.parse(data);
    // console.log(data);
    res.render('./od/buyall',{wps:data});
});
};

exports.buyupdate = (req,res) => {
    odmodel.buyupdate(req.query.wpid,req.query.number).then((data) => {
    }).catch((err) => {
                console.log("Erroe: " + err);
    });
odmodel.buyall().then((data) => {
    data = JSON.parse(data);
    // console.log(data);
    res.render('./od/buyall',{wps:data});
});
};

exports.buyend = (req,res) => {
    res.send('已完成結帳，金額從您領地裡貧窮的平民們扣除ㄒ_ㄒ');
};


// exports.queryadd = (req,res) => {
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
//             empmodel.queryadd(empno,ename,hiredate,salary,deptno,title).then((data) => {
//                 data = JSON.parse(data);
//                 res.render('./emp/queryadd',{emps:data});
//             }).catch((err) => {
//             console.log("Erroe: " + err);
//             });
//         });
//         }};

     
