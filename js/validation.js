// JavaScript Document
$(document).ready(function(){ 
/*  form validation */

//login form

// loginvalidate : flag for correct validation ( 0 = not OK, 1 = OK)
var loginvalidate = 1; // 0 not valid, 1 valid
var email_regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var alpha = /^[a-z]+$/;
var numeric = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;


	$('#btn_login').click(function () {
	
	// get value from form
	var l_email = $("#l_email").val();
	var l_password = $("#l_password").val();
	
	
	if (l_email != 0 && l_email.match(email_regex))
			  {
				  loginvalidate = 1;
				  $("#l_email").removeClass('error-border');
				   $("#l_email + span").remove();
			  }
		  else
			  {
				  loginvalidate = 0;
				  $("#l_email").addClass('error-border');
				  $("#l_email").after('<span class="error-text">Enter a valid email address.</span>');
			  }	
			  
	if (l_password != 0 && l_password=='toto')
			  {
				  loginvalidate = 1;
				  $("#l_password").removeClass('error-border');
				  $("#l_password + span").remove();
			  }
		  else
			  {
				  loginvalidate = 0;
				  $("#l_password").addClass('error-border');
				  $("#l_password").after('<span class="error-text">Password Incorrect.</span>');
			  }		
	if (loginvalidate == 1)
	{
		return true; // proceed
	}
		return false;	// do not proceed - complete the form correctly first
	});
	
/*  End: Login form validation */	



// Registration form

// reg_validate : flag for correct validation ( 0 = not OK, 1 = OK)
var reg_validate = 1; // 0 not valid, 1 valid

	$('#btn_register').click(function () {
		// get value from form
		var nic = $("#nic").val();
		var fname = $("#fname").val();
		var sname = $("#sname").val();
		var phone = $("#phone").val();
		var email = $("#email").val();
		var uname = $("#uname").val();
		var password = $("#password").val();
		var cpassword = $("#cpassword").val();
		
	if (nic != 0 && nic.length==14)
			  {
				  reg_validate = 1;
				  $("#nic").removeClass('error-border');
				  $("#nic + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#nic").addClass('error-border');
				  $("#nic").after('<span class="error-text">Incorrect NIC (14 expected characters).</span>');
			  }	
		
	if (fname != 0 && fname.match(alpha))
			  {
				  reg_validate = 1;
				  $("#fname").removeClass('error-border');
				  $("#fname + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#fname").addClass('error-border');
				  $("#fname").after('<span class="error-text">Only alphabets!.</span>');
			  }	
			  
	if (sname != 0 && sname.match(alpha))
			  {
				  reg_validate = 1;
				  $("#sname").removeClass('error-border');
				  $("#sname + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#sname").addClass('error-border');
				  $("#sname").after('<span class="error-text">Only alphabets!.</span>');
			  }	
			  
	if (phone != 0 && phone.match(numeric) && phone.length==7)
			  {
				  reg_validate = 1;
				  $("#phone").removeClass('error-border');
				  $("#phone + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#phone").addClass('error-border');
				  $("#phone").after('<span class="error-text">Only 7 numeric characters accepted!.</span>');
			  }	
			  
	if (email != 0 && email.match(email_regex))
			  {
				  reg_validate = 1;
				  $("#email").removeClass('error-border');
				  $("#email + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#email").addClass('error-border');
				  $("#l_email").after('<span class="error-text">Enter a valid email address.</span>');
			  }	
			  
	if (uname != 0 && uname.length==8)
			  {
				  reg_validate = 1;
				  $("#uname").removeClass('error-border');
				  $("#uname + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#uname").addClass('error-border');
				  $("#uname").after('<span class="error-text">Invalid length (8).</span>');
			  }	

/*	if (password != 0)
			  {
				  reg_validate = 1;
				  $("#password").removeClass('error-border');
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#password").addClass('error-border');
			  }	
*/
	if (cpassword != 0 && cpassword == password)
			  {
				  reg_validate = 1;
				  $("#cpassword").removeClass('error-border');
				  $("#password").removeClass('error-border');
				  $("#cpassword + span").remove();
			  }
		  else
			  {
				  reg_validate = 0;
				  $("#cpassword").addClass('error-border');
				  $("#password").addClass('error-border');
				  $("#cpassword").after('<span class="error-text">Password does not match!.</span>');
			  }	

	if (reg_validate == 1)
	{
		return true; // proceed
	}
		return false;	// do not proceed - complete the form correctly first
	});


			  
		
});
	