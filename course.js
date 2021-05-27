new Vue({
	el: '#app',
	data: () => ({
		table: [],
		fields: [
			{
				key: 'ccy',
				label: 'Валюта',
				sortable: true
			},
			{
				key: 'base_ccy',
				label: 'Базовая валюта',
				sortable: false
			},
			{
				key: 'buy',
				label: 'Покупка',
				sortable: true
			},
			{
				key: 'sale',
				label: 'Продажа',
				sortable: true,
			}
		]
	}),
	created() {
		this.getTable()
	},
	methods: {
		getTable() {
			fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4')
				.then(response => response.json())
				.then(json => this.table = json)
		}

	},
});