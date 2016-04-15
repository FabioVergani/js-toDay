var toDay=(function(l){
	var o=this, e=o.D, f=function(i){return o[i][e['get'+i]()];};
	o=o[l];
	return {
		D:[f('Day'),e.getDate(),f('Month')],
		Y:e.getFullYear(),
		toString:function(){var o=this,s='\u0020'; return o.D.join(s)+','+s+o.Y;}
	};
}).bind({
 D:new Date(),
 it:{
  Day:['Domenica','Lunedi','Martedi','Mercoledi','Giovedi','Venerdi','Sabato'],
  Month:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']
 }
});
//
//console.log(String(toDay('it')));
