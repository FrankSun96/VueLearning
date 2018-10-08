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
    var myFor = new Vue({
       el: '#myFor',
       data: {
           games: [
               {title: "勇者斗恶龙",  price: 500},
               {title: "跑跑卡丁车", price: 400},
               {title: "马里奥世界", price: 550}
           ],
           mygame: {
               title: "乌贼娘二代",
               price: 350,
               pubdate: "2017年夏季",
               category: "射击",
               agerange: "全年龄"
           }
       }
    });
    var myOn = new Vue({
        el: '#myOn',
        data: {},
        methods: {
            txtKeyup (event) {
                this.debugLog(event);
            },
            btnClick (event) {
                this.debugLog(event);
            },
            debugLog (event) {
                console.log(
                    event.srcElement.tagName,
                    event.srcElement.id,
                    event.srcElement.innerHTML,
                    event.key?event.key:""
                )
            }
        }
    });
    var myModel = new Vue({
       el: '#myModel',
       data: {
           message: "我爱马里奥",
           checkedGames: [],
           pickedSex: "",
           pickedHobby: "",
           likedNBAStar: [],
           username: "",
           checkUsernameOK: false,
           age: "",
           content: ""
       },
       methods: {
            checkUsername () {
                if(this.username.length > 0) this.checkUsernameOK = true;
                else this.checkUsernameOK = false;
            }
       }
    });
    Vue.component('today-weather', {
        template: '<div>今天下雨，出不去啦，干什么呢？看youtube吧</div>'
    });
    var WeatherComponent = {
        template: '<div>今天下雨，随他去吧</div>'
    };
    Vue.component('my-row1', {
        template: '<tr><td>(1)</td><td>塞尔达传说：荒野之息</td></tr>'
    });
    Vue.component('my-row2', {
        template: '<tr><td>(2)</td><td>新马里奥赛车</td></tr>'
    });
    Vue.component('my-row3', {
        template: '<tr><td>(3)</td><td>喷射乌贼娘2代</td></tr>'
    });
    Vue.component('now-weather', {
        template: '<strong>{{ todayWeather }}</strong>',
        data () {
            return {
                todayWeather: '雨夹雪'
            };
        }
    });
    Vue.component('test-result', {
        props: ['score'],
        template: '<div><strong>{{ score }}分, {{ testResult }}</strong></div>',
        computed: {
            testResult () {
                var strResult = "";
                if (this.score < 60) {
                    strResult = "不及格";
                } else if (this.score < 90) {
                    strResult = "中等生";
                } else if (this.score <= 100) {
                    strResult = "优等生";
                }
                return strResult;
            }
        }
    });
    Vue.component('say-hello',{
        props: ['pname'],
        template: '<div>你好，<strong>{{ pname }}</strong></div>'
    });
    Vue.component('show-member-info', {
        props: {
            name: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                validator (value) {
                    return value>= 0 && value<= 130;
                }
            },
            detail: {
                type: Object,
                default () {
                    return {
                        address: 'US',
                        language: 'English',
                    }
                }
            }
        },
        template:
            '<div>姓名: {{this.name}}<br>'
            + '年龄: {{this.age}}<br>'
            + '地址: {{this.detail.address}}<br>'
            + '语言: {{this.detail.language}}</div>',

    });
    Vue.component('add-method', {
        props: ['a', 'b'],
        template: '<div><button @click="add">加吧</button></div>',
        methods: {
            add () {
                var value = 0;
                value = this.a + this.b;
                this.$emit('add_event', {
                    result: value
                });
            }
        }
    });
    Vue.component('say-to', {
        props: ['pname'],
        template: '<div>' +
            '你好, <strong>{{ pname }}</strong>!' +
            '<slot></slot></div>'
    });
    Vue.component('nba-all-stars', {
        props: ['c', 'pf'],
        template: '<div>' +
            '<div>中锋: {{c}}</div>' +
            '<div>小前： <slot name="sf"></slot></div>' +
            '<div>分卫： <slot name="sg"></slot></div>' +
            '<div>空为: <slot name="pg"></slot></div></div>'

    });
    var myCom = new Vue({
        el: '#myCom',
        data: {
            myname: 'Frank',
            result: 0
        },
        components: {
            'my-weather': WeatherComponent,
        },
        methods: {
            getAddResult (pval) {
                this.result = pval.result;
            }
        }
    });

})();