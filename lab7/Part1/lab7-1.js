document.getElementById("regExpButton").onclick = regExp;
function regExp() {
    /** Demo code..*/
    var content = document.getElementById("content").value;
    var div = document.getElementById("showHtmlDiv");

    var reg1 = /^[0-9]*$/;

    //Finish the following regualr expression(reg2,reg3,reg4).

    var reg2 = /^[a-z][a-z|0-9|_]{3,15}$/;
    var reg3 = /^.+@.+\.[a-z]+$/;
    var reg4 = /^[\u4E00-\u9FA5]+$/;


    if (reg1.test(content)) {
        div.innerHTML = "<span style=/\"color: green; \">全为数字</span>";
    } else if (reg2.test(content)) {
        div.innerHTML = "<span style=\"color: green; \">以字母开头、可带数字、\"_\"的字串，且长度为4-16。</span>";
    }
    else if (reg3.test(content)) {
        div.innerHTML = "<span style=\"color: green; \">邮箱地址</span>";
    } else if (reg4.test(content)) {
        div.innerHTML = "<span style=\"color: green; \">全为中文</span>";
    } else {
        div.innerHTML = "<span style=\"color: green; \">其他格式</span>";
    }
}


