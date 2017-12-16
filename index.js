(function() {
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
	        },{
	          	date: '2016-05-01',
	          	name: 'E5',
	          	address: '杭州'
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

const AntVchart = {
	template: '#AntVchartTPL',
	data: function() {
		const originData = [
    			{ year: '1991', value: 3 },
			    { year: '1992', value: 4 },
			    { year: '1993', value: 3.5 },
			    { year: '1994', value: 5 },
			    { year: '1995', value: 4.9 },
			    { year: '1996', value: 6 },
			    { year: '1997', value: 7 },
			    { year: '1998', value: 9 },
			    { year: '1999', value: 13 },
  			];
  		const scale = [{
    			dataKey: 'value',
    			min: 0,
  			},{
    			dataKey: 'year',
    			min: 0,
    			max: 1,
  			}];
		return {
			originData,
        	scale,
        	height: '400px',	
		}
	},
	methods: {

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
	},
	{
		path: '/AntVchart',
		component: AntVchart
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
})();