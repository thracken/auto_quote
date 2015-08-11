//Quote page 1
window.location="http://csi.learninga-z.com/index.php?module=GenerateQuote"; //only necessary for full automation

var user = window.prompt("Please enter the username.","");
$j("#username").val(user);
$j("input[name='action']").click(); //Go to next page


//Quote page 2
//Grab existing expiration dates, clear white space
function DateSlice(uglydate){
  var exp_date_day = uglydate.slice(3,5);
  var exp_date_month = uglydate.slice(0,2);
  var exp_date_year = uglydate.slice(6,10);
  var exp_date = exp_date_year+","+exp_date_month+","+exp_date_day;
  if(exp_date_year > 2014){
    return exp_date;
  }else {
    return;
  }
}

var all_dates = new Array();
var raz_exp_date = $j("table table tr:nth-child(3) td:nth-child(3)").text().trim($j(this).text());
raz_exp_date = DateSlice(raz_exp_date);
var raz_exp = new Date(raz_exp_date);

var rk_exp_date = $j("table table tr:nth-child(4) td:nth-child(3)").text().trim($j(this).text());
rk_exp_date = DateSlice(rk_exp_date);
var rk_exp = new Date(rk_exp_date);

var ell_exp_date = $j("table table tr:nth-child(5) td:nth-child(3)").text().trim($j(this).text());
ell_exp_date = DateSlice(ell_exp_date);
var ell_exp = new Date(ell_exp_date);

var hs_exp_date = $j("table table tr:nth-child(6) td:nth-child(3)").text().trim($j(this).text());
hs_exp_date = DateSlice(hs_exp_date);
var hs_exp = new Date(hs_exp_date);

var saz_exp_date = $j("table table tr:nth-child(7) td:nth-child(3)").text().trim($j(this).text());
saz_exp_date = DateSlice(saz_exp_date);
var saz_exp = new Date(saz_exp_date);

var waz_exp_date = $j("table table tr:nth-child(8) td:nth-child(3)").text().trim($j(this).text());
waz_exp_date = DateSlice(waz_exp_date);
var waz_exp = new Date(waz_exp_date);

var vaz_exp_date = $j("table table tr:nth-child(9) td:nth-child(3)").text().trim($j(this).text());
vaz_exp_date = DateSlice(vaz_exp_date);
var vaz_exp = new Date(vaz_exp_date);

var rt_exp_date = $j("table table tr:nth-child(10) td:nth-child(3)").text().trim($j(this).text());
rt_exp_date = DateSlice(rt_exp_date);
var rt_exp = new Date(rt_exp_date);

//Validate date objects
if(isNaN(raz_exp)==false){
  all_dates.push(new Date(raz_exp));
  $j("#raz_actionmenu").val("renew");
  $j("#raz_yearduration").val("1 year");
}
if(isNaN(rk_exp)==false){
  all_dates.push(new Date(rk_exp));
  $j("#rk_actionmenu").val("renew");
  $j("#rk_yearduration").val("1 year");
}
if(isNaN(ell_exp)==false){
  all_dates.push(new Date(ell_exp));
  $j("#raz-ell_actionmenu").val("renew");
  $j("#raz-ell_yearduration").val("1 year");
}
if(isNaN(hs_exp)==false){
  all_dates.push(new Date(hs_exp));
  $j("#headsprout_actionmenu").val("renew");
  $j("#headsprout_yearduration").val("1 year");
}
if(isNaN(saz_exp)==false){
  all_dates.push(new Date(saz_exp));
  $j("#saz_actionmenu").val("renew");
  $j("#saz_yearduration").val("1 year");
}
if(isNaN(waz_exp)==false){
  all_dates.push(new Date(waz_exp));
  $j("#waz_actionmenu").val("renew");
  $j("#waz_yearduration").val("1 year");
}
if(isNaN(vaz_exp)==false){
  all_dates.push(new Date(vaz_exp));
  $j("#vocab_actionmenu").val("renew");
  $j("#vocab_yearduration").val("1 year");
}
if(isNaN(rt_exp)==false){
  all_dates.push(new Date(rt_exp));
  $j("#tr_actionmenu").val("renew");
  $j("#tr_yearduration").val("1 year");
}

var last_exp = new Date(Math.min.apply(null,all_dates)); //Get earliest expiration date

function FormatDate(date){
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  var full_Date = month + "-" + day + "-" + year;
  return full_Date;
}

var valid_date = FormatDate(last_exp); //Correctly formatted date for CSI field

sessionStorage.setItem("valid-date",valid_date);

//If I ever get around to it, insert code for coupon codes here

$j("input[name='action']").click(); //Go to next page


//Quote page 3
$j("input[name='action']").eq(2).click();


//Edit quote (Page 4)
//Multiyear script here
var last_exp = sessionStorage.getItem("valid-date");
$j("#lightwindow_iframe").contents().find("#valid_through").prop('value',last_exp);
$j("#lightwindow_iframe").contents().find("input[name='action']").click();
