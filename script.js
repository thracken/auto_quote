//Quote page 1
window.location="http://csi.learninga-z.com/index.php?module=GenerateQuote";  //only necessary for full automation
$j("#username").val("jgreenland");
$j("input[name='action']").click(); //Go to next page


//Quote page 2
//Grab existing expiration dates, clear white space
var all_dates = new Array();
var raz_exp_date = $j("table table tr:nth-child(3) td:nth-child(3)").text().trim($j(this).text());
    raz_exp = new Date(raz_exp_date),
    rk_exp_date = $j("table table tr:nth-child(4) td:nth-child(3)").text().trim($j(this).text()),
    rk_exp = new Date(rk_exp_date),
    ell_exp_date = $j("table table tr:nth-child(5) td:nth-child(3)").text().trim($j(this).text()),
    ell_exp = new Date(ell_exp_date),
    hs_exp_date = $j("table table tr:nth-child(6) td:nth-child(3)").text().trim($j(this).text()),
    hs_exp = new Date(hs_exp_date),
    saz_exp_date = $j("table table tr:nth-child(7) td:nth-child(3)").text().trim($j(this).text()),
    saz_exp = new Date(saz_exp_date),
    waz_exp_date = $j("table table tr:nth-child(8) td:nth-child(3)").text().trim($j(this).text()),
    waz_exp = new Date(waz_exp_date),
    vaz_exp_date = $j("table table tr:nth-child(9) td:nth-child(3)").text().trim($j(this).text()),
    vaz_exp = new Date(vaz_exp_date),
    rt_exp_date = $j("table table tr:nth-child(10) td:nth-child(3)").text().trim($j(this).text()),
    rt_exp = new Date(rt_exp_date);

//Validate date objects
    if(isNaN(raz_exp)==false){
      all_dates.push(new Date(raz_exp));
    }
    if(isNaN(rk_exp)==false){
      all_dates.push(new Date(rk_exp));
    }
    if(isNaN(ell_exp)==false){
      all_dates.push(new Date(ell_exp));
    }
    if(isNaN(hs_exp)==false){
      all_dates.push(new Date(hs_exp));
    }
    if(isNaN(saz_exp)==false){
      all_dates.push(new Date(saz_exp));
    }
    if(isNaN(waz_exp)==false){
      all_dates.push(new Date(waz_exp));
    }
    if(isNaN(vaz_exp)==false){
      all_dates.push(new Date(vaz_exp));
    }
    if(isNaN(rt_exp)==false){
      all_dates.push(new Date(rt_exp));
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

//Select renew and 1 year for each product with an expiration date
if(raz_exp_date != "--"){
  $j("#raz_actionmenu").val("renew");
  $j("#raz_yearduration").val("1 year");
}
if(rk_exp_date != "--"){
  $j("#rk_actionmenu").val("renew");
  $j("#rk_yearduration").val("1 year");
}
if(ell_exp_date != "--"){
  $j("#raz-ell_actionmenu").val("renew");
  $j("#raz-ell_yearduration").val("1 year");
}
if(hs_exp_date != "--"){
  $j("#headsprout_actionmenu").val("renew");
  $j("#headsprout_yearduration").val("1 year");
}
if(saz_exp_date != "--"){
  $j("#saz_actionmenu").val("renew");
  $j("#saz_yearduration").val("1 year");
}
if(waz_exp_date != "--"){
  $j("#waz_actionmenu").val("renew");
  $j("#waz_yearduration").val("1 year");
}
if(vaz_exp_date != "--"){
  $j("#vocab_actionmenu").val("renew");
  $j("#vocab_yearduration").val("1 year");
}
if(rt_exp_date != "--"){
  $j("#tr_actionmenu").val("renew");
  $j("#tr_yearduration").val("1 year");
}
//If I ever get around to it, insert code for coupon codes here
$j("input[name='action']").click(); //Go to next page


//Quote page 3
$j("input[name='action']").eq(2).click();


//Edit quote page
//Multiyear script here
$j("#lightwindow_iframe").contents().find("#valid_through").prop('value',last_exp);
$j(#lightwindow_iframe").contents().find("input[name='action']").click();
