;(function(){
    var myApp = new Vue({
        el: '#myApp',
        data: {
            seen: true,
            games: [
                {title: '勇者斗恶龙', price: 400},
                {title: '超级马里奥', price: 380},
                {title: '我的世界', price: 99}
            ],
        }
    });
    var myGame = new Vue({
        el: '#myGame',
        data: {
            message: '超级马里奥'
        },
        methods: {
            btnClick: function(pname) {
                this.message = pname;
            }
        }
    });
    Vue.component('game-item', {
        props: ['game'],
        template: '<li>{{ game.title }}</li>'
    });
    var myItem = new Vue({
        el: '#myItem',
        data: {
            games: [
                {title: '斗地主'},
                {title: '打麻将'},
                {title: 'UNO'}
            ]
        }
    });
    var myFilter = new Vue({
        el: '#myFilter',
        data: {
            message: 'hello vue.js world',
            num: 0.3
        },
        filters: {
            toupper: function(value){
                return value.toUpperCase();
            },
            topercentage: function(value){
                return value * 100 + '%';
            }
        }
    });
    var myComputed = new Vue({
        el: '#myComputed',
        data: {
            price: 29980,
        },
        computed: {
            priceInTax: function(){
                return this.price * 1.08;
            },
            priceChinaRMB: function(){
                return Math.round(this.priceInTax / 16.75);
            }
        }
    });
    var myWatch = new Vue({
        el: '#myWatch',
        data: {
            price: 0,
            priceInTax: 0,
            priceChinaRMB: 0
        },
        watch: {
            price: function(newVal, oldVal){
                console.log(newVal, oldVal);
                this.priceInTax = Math.round(this.price * 1.08);
                this.priceChinaRMB = Math.round(this.priceInTax / 16.75)
            }
        },
        methods: {
            btnClick: function(newPrice) {
                this.price += newPrice;
            }
        }
    });
    myWatch.price = 29980;
    var mySetter = new Vue({
        el: '#mySetter',
        data: {
            price: 29980
        },
        computed: {
            priceInTax: {
                get: function(){
                    return this.price * 1.08;
                },
                set: function(value){
                    this.price = value;
                }
            },
            priceChinaRMB: function(){
                return Math.round(this.priceInTax / 16.75);
            }
        },
        methods: {
            btnClick: function(newPrice){
                this.priceInTax = newPrice
            }
        }
    });
    var myClass = new Vue({
        el: '#myClass',
        data: {
            isActive: true,
            myClass: {
                active: true,
                big: true
            }
        },
        methods: {
            btnClick: function(){
                this.isActive = !this.isActive;
                this.myClass.big = false;
            }
        }
    });
    var myIf = new Vue({
        el: '#myIf',
        data: {
            result: 0
        },
        methods: {
            btnClick () {
                this.result = Math.round(Math.random() * 100);
            }
        }
    });
    var myShow = new Vue({
        el: '#myShow',
        data: {
            result: true
        },
        methods: {
            btnClick () {
                this.result = !this.result;
            }
        }
    });
})();