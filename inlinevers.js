	toDay=(function(c){
		var t=c,o={
			D:t,
			Day:['Domenica','Lunedi','Martedi','Mercoledi','Giovedi','Venerdi','Sabato'],
			Month:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']
		},
		f=function(i){var e=o;return e[i][e.D['get'+i]()];};
		return {
			D:[f('Day'),t.getDate(),f('Month')],
			Y:t.getFullYear(),
			toString:function(){var e=this,s='\u0020'; return e.D.join(s)+','+s+e.Y;}
		};
	})(new Date());

console.log(String(toDay));
