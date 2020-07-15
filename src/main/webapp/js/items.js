function queryByName(url) {
    var query=$("#searchName").val();
    window.location.href=url+"/items/findAll.action?query="+query;
}

//分页查询
//首页
function firstPage(url) {
    //获得搜索框的值
    var query = $("#searchName").val();
    //获得当前页码
    var pageNow = $("#pageNow").val();
    //设置当前页
    pageNow = 1;
    //跳转
    window.location.href=url+"/items/findAll.action?query="+query+"&pageNow="+pageNow;
}

//末页
function lastPage(url,myPages){
    //获得搜索框的值
    var query = $("#searchName").val();
    //获得当前页码
    var pageNow = $("#pageNow").val();
    //设置当前页
    pageNow = myPages;
    //跳转
    window.location.href=url+"/items/findAll.action?query="+query+"&pageNow="+pageNow;
}


//上一页
function prePage(url,myPages) {
    //获得搜索框的值
    var query = $("#searchName").val();
    //获得当前页码
    var pageNow = $("#pageNow").val();
    //设置当前页
    if(pageNow>=1 && pageNow<=myPages){
        if(pageNow>1){
            pageNow = pageNow - 1;
        }else{
            pageNow = 1;
        }
    }else{
        pageNow = 1;
    }
    //跳转
    window.location.href=url+"/items/findAll.action?query="+query+"&pageNow="+pageNow;
}


//下一页
function nextPage(url,myPages) {
    //获得搜索框的值
    var query = $("#searchName").val();
    //获得当前页码
    var pageNow = $("#pageNow").val();
    //设置当前页
    if(pageNow>=1 && pageNow<=myPages){
        if(pageNow<myPages){
            pageNow = pageNow - (-1);
        }else if(pageNow==myPages){
            pageNow = myPages;
        }
    }else{
        pageNow = 1;
    }
    //跳转
    window.location.href=url+"/items/findAll.action?query="+query+"&pageNow="+pageNow;
}


//跳转
function skipPage(url,myPages) {
    //获得搜索框的值
    var query = $("#searchName").val();
    //获得当前页码
    var pageNow = $("#pageNow").val();
    //设置当前页}
    if(pageNow<1 || pageNow>myPages){
        alert("超出当前页数范围！");
    }else{
        //跳转
        window.location.href=url+"/items/findAll.action?query="+query+"&pageNow="+pageNow;
    }
}

function del(url,id) {
    if (window.confirm('确定删除选择的商品吗？')) {
        window.location.href = url + "/items/del.action?id=" + id;
    }
}

function delAll(url) {
    if (window.confirm('确定删除选择的商品吗？')) {
        var ids = '';
        $('input:checkbox[name=chooce_item]:checked').each(function (k) {
            if (k == 0) {
                ids = $(this).val();
            } else {
                ids += ',' + $(this).val();
            }
        })
        if (ids != '') {
            window.location.href = url + "/items/delAll.action?ids=" + ids;
        }
    }
}