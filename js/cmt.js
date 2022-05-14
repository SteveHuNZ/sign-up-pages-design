function getCommentList() {
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            // console.log(res);
            if (res.status !== 200) return alert('failed to get comment lists')
                // console.log("successed to get data");
            var rows = []
            $.each(res.data, function(i, item) {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: goldenrod;">comment time:' + item.time + '</span> Item 1<span class="badge" style="background-color: aqua;">commenter:' + item.username + '</span> ' + item.content + '</li>'
                rows.push(str)
            })
            $('#cmt-list').empty().append(rows.join(''))


        }
    })

}
getCommentList()
$(function() {
    $('#formAddCmt').submit(function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data,
            function(res) {
                if (res.status !== 201) {
                    alert('faild,please retry')
                }
                getCommentList()
                $('#formAddCmt')[0].reset()

            })
    })
})