

function insert(num)
{
	$("#box").val($("#box").val()+num);

	
}

function cl(data)
{
	$("#box").val('');
}

function operation()
{
	$("#box").val(eval($("#box").val()))
}

function sigdel()
{
	 value=$("#box").val();
	$("#box").val(value.substring(0,value.length-1))
}

