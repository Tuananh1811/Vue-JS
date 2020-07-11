let root = new Vue({ //đối tượng quản lý  
    el: "#root",
    data: {
        title: "hello",
    },
    methods: {
        say: function(text) {
            return 'hello' + text

        },
    },
});
//hệ thống phản ứng - reactivity chỉ cần thay đổi dữ liệu  
console.log(root);
setTimeout(function() {
    root.title = 'say Hello';
}, 3000);