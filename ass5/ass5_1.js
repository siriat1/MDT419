var number =1;
function postFunction()
{
    var text = document.getElementById("text1").value;
    if( number ==1 && text !="")
    {
        var comment = document.getElementById("topic1");
        comment.textContent = text;
        number++;
        
    }
    else if(number ==2 && text !="")
    {
       
        var comment = document.getElementById("comment1");
        comment.textContent = text;
        number++;
    }
    else if(number ==3 && text !="")
    {
      
        var comment = document.getElementById("comment2");
        comment.textContent = text;
        number++;
    }
}
function clearFunction()
{ 
    topic1.textContent = null;
    comment1.textContent = null;
    comment2.textContent = null;
}