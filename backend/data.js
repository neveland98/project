var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;
const dbRoute =
  'mongodb+srv://admin:admin@cluster0-2gh0b.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function(err){
    console.log('connection error', err);
});

db.once('open', function(){
    console.log('Connection to DB successful');
});

var Schema = mongoose.Schema;
var mySchema = new Schema({
    name:String,
    password:String,
    attributes:String
});

mySchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

var User = mongoose.model('User', mySchema);
/*
var testdata = new  User({
    name: "admin",
   password: "password",
   attributes: "ADMIN"
});

testdata.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var testdata = new  User({
    name: "finance_admin",
   password: "password",
   attributes: "FINANCE_ADMIN"
});

testdata.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});


var testdata = new  User({
    name: "sales_admin",
   password: "password",
   attributes: "SALES_ADMIN"
});

testdata.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var testdata = new  User({
    name: "HR_admin",
   password: "password",
   attributes: "HR_ADMIN"
});

testdata.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var testdata = new  User({
    name: "engineering_admin",
   password: "password",
   attributes: "ENGG_ADMIN"
});

testdata.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

*/

var applicationSchema = new Schema({
    name:String,
    category:String,
    role_attributes:String
});

var applications = mongoose.model('applications', applicationSchema);

/*
var application = new applications({
    name:"Manage User Account",
    category:"Global",
    role_attributes:"ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Assign Roles",
    category:"Global",
    role_attributes:"ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});


var application = new applications({
    name:"Help Desk",
    category:"Global",
    role_attributes:"ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});
*/

/*
var application = new applications({
    name:"Finance Reports",
    category:"Finance",
    role_attributes:"ADMIN,FINANCE_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Accounts Payable",
    category:"Finance",
    role_attributes:"ADMIN,FINANCE_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Accounts Receivables",
    category:"Finance",
    role_attributes:"ADMIN,FINANCE_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Tax",
    category:"Finance",
    role_attributes:"ADMIN,FINANCE_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});
*/

/*
var application = new applications({
    name:"Sales Reports",
    category:"Sales",
    role_attributes:"ADMIN,SALES_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Sales Leads",
    category:"Sales",
    role_attributes:"ADMIN,SALES_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Sales Demo",
    category:"Sales",
    role_attributes:"ADMIN,SALES_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});
*/

/*
var application = new applications({
    name:"New Hire",
    category:"HR",
    role_attributes:"ADMIN,HR_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"On-boarding",
    category:"HR",
    role_attributes:"ADMIN,HR_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Benefits",
    category:"HR",
    role_attributes:"ADMIN,HR_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Payroll",
    category:"HR",
    role_attributes:"ADMIN,HR_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Terminations",
    category:"HR",
    role_attributes:"ADMIN,HR_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"HR Reports",
    category:"HR",
    role_attributes:"ADMIN,HR_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});
*/

var application = new applications({
    name:"Application Monitoring",
    category:"Engineering",
    role_attributes:"ADMIN,ENGG_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Tech Support",
    category:"Engineering",
    role_attributes:"ADMIN,ENGG_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"App Development",
    category:"Engineering",
    role_attributes:"ADMIN,ENGG_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"App Admin",
    category:"Engineering",
    role_attributes:"ADMIN,ENGG_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});

var application = new applications({
    name:"Release Management",
    category:"Engineering",
    role_attributes:"ADMIN,ENGG_ADMIN"
})

application.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Success:' , data);
});





