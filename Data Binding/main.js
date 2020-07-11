let root = new Vue({
    el: '#root',
    data: {
        title: 'Áo khoác nam  ATS021S8',
        url: 'https://vi.vuejs.org/v2/guide/index.html',
        target: '_top',
        price: 750000

    },
    methods: {
        formatPrice: function() {
            // console.log(this.price);
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price);
        }

    }

})