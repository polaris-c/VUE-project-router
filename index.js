// console.log(' * * * OK * * *');

const search = {
	template: '#searchTPL',
	data: function() {
		return {
			aInput: ''
		}
	},
	methods: {

	}
}

const add = {
	template: '#addTPL',
	data: function() {
		return {
			labelPosition: 'right',
			form: {
          		name: '',
	          	region: '',
	          	date1: '',
	          	date2: '',
	          	delivery: false,
	          	type: [],
	          	resource: '',
	          	desc: ''
		    }
		}
	},
	methods: {
		onSubmit() {
        	console.log('submit!');
      	}
	}
}

const check = {
	template: '#checkTPL',
	data: function() {
		return {
			tableData: [{
	          	date: '2016-05-02',
	          	name: 'A1',
	          	address: '上海'
	        }, {
	          	date: '2016-05-04',
	          	name: 'B2',
	          	address: '北京'
	        }, {
	          	date: '2016-05-01',
	          	name: 'C3',
	          	address: '南京'
	        },{
	          	date: '2016-05-01',
	          	name: 'D4',
	          	address: '深圳'
	        } ]
		}
	},
	methods: {
      	handleEdit(index, row) {
        	console.log(index, row);
    	},
        handleDelete(index, row) {
        	console.log(index, row);
      	}
    }
}

const routes = [
	{
		path: '/search', 
		component: search
	},
	{
		path: '/add',
		component: add
	},
	{
		path: '/check',
		component: check
	}
]

const router = new VueRouter({
	routes: routes
})

var app1 = new Vue({
	el: '#app1',
	router: router,
	data: {

	},
	methods: {
        handleOpen(key, keyPath) {
        	console.log(key, keyPath);
        },
      	handleClose(key, keyPath) {
        	console.log(key, keyPath);
      	}
    }
});