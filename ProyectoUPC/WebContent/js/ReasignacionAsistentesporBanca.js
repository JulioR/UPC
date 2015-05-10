$(document).ready(function () {

	$("#divMantenimiento").hide();
	$("#grid").jqGrid("clearGridData", true).trigger("reloadGrid");
	$("#grid").jqGrid({
		jsonReader: {key:true },
		colNames: ['', 'Id', 'IdBanca', 'Banca', 'IdAsistente', 'Asistente', 'CarteraAsignada'],
		colModel:[
			{
			   name: '', align: 'center', formatter: function () {
				   return "<img src='images/edit.png'  title='Reasignar' style='cursor:pointer'/>";
			   },
			   width: 110,sortable:false,
			},
			{name:'Id',index:'Id',hidden: true},
			{name:'IdBanca',index:'IdBanca',hidden: true},
			{name:'Banca',index:'Banca', align: 'center',width: 340,sortable:false},
			{name:'IdAsistente',index:'IdAsistente',hidden: true},
			{name:'Asistente',index:'Asistente',width: 340, align: 'center',sortable:false},
			{name:'CarteraAsignada',index:'CarteraAsignada', hidden: true},
		],
		 width: 790,
		 height: '100%',
		 pager:$('#divgrid'), 
		 rowNum: 10,
		 rowList: [5, 10, 20, 50],
		 page: 1,
		 viewrecords: true,
		 altRows: false,
		 rownumbers: false,
		 ignoreCase: true,
		 gridview: true,
         loadtext: 'Cargando datos...',
         emptyrecords: 'No hay resultados',
		 caption: "Reasignación de Asistentes por Banca",
         onCellSelect: function (id, iCol, cellcontent, e) {
             if (iCol == 0) {
				$("#operacion").val("2");
				$("#posicion").val($("#grid").jqGrid('getRowData', id).Id);
				$("#txtBanca").text($("#grid").jqGrid('getRowData', id).Banca);
				$("#txtAsistente").text($("#grid").jqGrid('getRowData', id).Asistente);
				$("#ddlAsistente").val("");
				$("#divMantenimiento").dialog("open");
			 }
         },
	 }).jqGrid('navGrid','#divgrid',{search:false,edit:false,add:false,del:false});
	 
	 var data = [
		 {Id:1,IdBanca:"1",Banca:"Corporativa Primaria",IdAsistente:"1",Asistente:"Nombre Asistente 1",CarteraAsignada: 0},
		 {Id:2,IdBanca:"2",Banca:"Corporativa No Primaria",IdAsistente:"2",Asistente:"Nombre Asistente 2",CarteraAsignada: 1},
		 {Id:3,IdBanca:"3",Banca:"Grandes",IdAsistente:"3",Asistente:"Nombre Asistente 3",CarteraAsignada: 0},
	 ];
	 for(var i=0;i<=data.length;i++)   
		$("#grid").addRowData(i+1,data[i]);

	$("#divMantenimiento").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		draggable: true,
		maximize: false,
		resizable: false,
		position: 'middle',
		close: "Cerrar",
		title: "Reasignación de Asistente"
	});
	
	$("#divMensaje").dialog({
		autoOpen: false,
		modal: true,
		width: 250,
		draggable: false,
		maximize: false,
		resizable: false,
		position: 'middle',
		title: "Mensaje de Confirmación"
	});
	
	$("#btnLimpiar").click(function(){
		$("#ddlBancaFiltro").val("");
		$("#ddlAsistenteFiltro").val("");
	});
	
	$("#btnMantenimientoGrabar").click(function(){
		if($("#ddlAsistente").val()==""){
			$("#ddlAsistente").focus();
			return;
		}
		if($.trim($("#txtAsistente").text()) == $.trim($("#ddlAsistente option:selected").text())){
			return;
		}
		$("#divMantenimiento").dialog("close");
		var id = $("#posicion").val();
		OperacionActualizar(id);
	});
	
	$("#btnMantenimientoSalir").click(function(){
		$("#divMantenimiento").dialog("close");
	});

	$("#btnValidarAceptar").click(function(){
		$("#divValidacion").dialog("close");
	});
});

function OperacionActualizar(id){
	$("#grid").jqGrid('setCell', id, 'IdAsistente', $("#ddlAsistente").val());
	$("#grid").jqGrid('setCell', id, 'Asistente', $("#ddlAsistente option:selected").text());
	$("#grid").jqGrid('getLocalRow', id).IdAsistente = $("#ddlAsistente").val();
	$("#grid").jqGrid('getLocalRow', id).Asistente = $("#ddlAsistente option:selected").text();
	$("#grid").trigger('reloadGrid');
	$("#spnMensaje").html("La reasignación fue ejecutada de forma satisfactoria");
	$("#divMensaje").dialog("open");
}