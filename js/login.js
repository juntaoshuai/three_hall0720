$(document).ready(function() {
	$("#login_form1").validate({
	    debug : false,
	    errorClass : "error",
	    focusInvalid : true,
	    ignore: "[name='']",
	    onsubmit: true,
	    submitHandler : function(form) {
		    form.submit();
	    },
	    errorPlacement: function(error, element) {  
        	var name = $(element).attr("name");
        	var tipElement = $("[id='tip_" + name + "']");
        	if(tipElement != null && tipElement.length > 0) {
        		error.appendTo(tipElement);
        	} else {
        		error.appendTo(element.parent()); 
        	}
        },
	    rules : {
	        account : {
		        required : true
	        },
	        password : {
	            required : true,
	            minlength : 6
	        }, 
	        verifyCode : {
	        	required: true
	        },
	        userType: {
	        	required: true
	        }
	    },
	    messages : {
	        account : {
		        required : "请输入用户名或者邮箱"
	        },
	        password : {
	            required : "请输入密码",
	            minlength : $.validator.format("密码至少{0}个字符")
	        },
	        verifyCode: {
	        	required: "请输入验证码"
	        },
	        userType: {
	        	required: "请选择用户类型"
	        }
	    }

	});
	$("#login_form2").validate({
	    debug : false,
	    errorClass : "error",
	    focusInvalid : true,
	    ignore: "[name='']",
	    onsubmit: true,
	    submitHandler : function(form) {
		    form.submit();
	    },
	    errorPlacement: function(error, element) {  
        	var name = $(element).attr("name");
        	var tipElement = $("[id='tip_" + name + "']");
        	if(tipElement != null && tipElement.length > 0) {
        		error.appendTo(tipElement);
        	} else {
        		error.appendTo(element.parent()); 
        	}
        },
	    rules : {
	        account : {
		        required : true
	        },
	        password : {
	            required : true,
	            minlength : 6
	        }, 
	        verifyCode : {
	        	required: true
	        },
	        userType: {
	        	required: true
	        }
	    },
	    messages : {
	        account : {
		        required : "请输入用户名或者邮箱"
	        },
	        password : {
	            required : "请输入密码",
	            minlength : $.validator.format("密码至少{0}个字符")
	        },
	        verifyCode: {
	        	required: "请输入验证码"
	        },
	        userType: {
	        	required: "请选择用户类型"
	        }
	    }

	});
	
	
});
