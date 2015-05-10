$(document).ready(function () {

	$("#divMantenimiento").hide();
	$("#divEliminar").hide();
	$("#grid").jqGrid("clearGridData", true).trigger("reloadGrid");
	$("#grid").jqGrid({
		colNames: ['', 'Id', 'IdBanca', 'Banca', 'IdAsistente', 'Asistente', 'CarteraAsignada'],
		colModel:[
			{
			   name: '', align: 'center', formatter: function () {
				   return "<img src='images/remove.png'  title='Eliminar' style='cursor:pointer'/>";
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
		 caption: "Asignación de Asistentes por Banca",
         onCellSelect: function (id, iCol, cellcontent, e) {
             if (iCol == 0) {
				if ($("#grid").jqGrid('getRowData', id).CarteraAsignada == 1){
					$("#divValidacion").dialog("open");
					return;
				}
				$("#posicion").val($("#grid").jqGrid('getRowData', id).Id);
				$("#divEliminar").dialog("open");
			 }
         },
	 }).jqGrid('navGrid','#divgrid',{search:false,edit:false,add:false,del:false});
	 
	 var data = [
		 {Id:1,IdBanca:"1",Banca:"Corporativa Primaria",IdAsistente:"1",Asistente:"Nombre Asistente 1",CarteraAsignada: 1},
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
		title: "Nueva Asignación"
	});
	
	$("#divEliminar").dialog({
		autoOpen: false,
		modal: true,
		width: 300,
		draggable: true,
		maximize: false,
		resizable: false,
		position: 'middle',
		title: "Mensaje de Confirmación"
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
	
	$("#divValidacion").dialog({
		autoOpen: false,
		modal: true,
		width: 350,
		draggable: false,
		maximize: false,
		resizable: false,
		position: 'middle',
		title: "Mensaje de Validación"
	});
	
	$("#btnAnadir").click(function(){
		$("#ddlBanca").val("");
		$("#ddlAsistente").val("");
		$("#divMantenimiento").dialog("open");
	});
	
	$("#btnLimpiar").click(function(){
		$("#ddlBancaFiltro").val("");
		$("#ddlAsistenteFiltro").val("");
	});
	
	$("#btnMantenimientoGrabar").click(function(){
		if($("#ddlBanca").val()==""){
			$("#ddlBanca").focus();
			return;
		}
		if($("#ddlAsistente").val()==""){
			$("#ddlAsistente").focus();
			return;
		}
		var IdBanca = $("#ddlBanca").val();
		var IdAsistente = $("#ddlAsistente").val();
		var elementos = $("#TablaGrilla").jqGrid('getDataIDs');
		for (var i = 0; i < elementos.length; i++) {
			var IdBancaFila = $("#TablaGrilla").getRowData(elementos[i]).IdBanca;
			var IdAsistenteFila = $("#TablaGrilla").getRowData(elementos[i]).IdAsistente;
			if(IdBanca == IdBancaFila && IdAsistente == IdAsistenteFila){
				return;
			}
		}
		$("#divMantenimiento").dialog("close");
		Insertar();
	});
	
	$("#btnMantenimientoSalir").click(function(){
		$("#divMantenimiento").dialog("close");
	});
	
	$("#btnEliminarAceptar").click(function(){
		$("#divEliminar").dialog("close");
		var id = $("#posicion").val();
		Eliminar(id);
	});
	
	$("#btnEliminarCancelar").click(function(){
		$("#divEliminar").dialog("close");
	});
	
	$("#btnValidarAceptar").click(function(){
		$("#divValidacion").dialog("close");
	});
});

function Insertar(){
	var fila = {};
	fila["Id"] = $("#grid").jqGrid('getDataIDs').length + 1;
	fila["IdBanca"] = $("#ddlBanca").val();
	fila["Banca"] = $("#ddlBanca option:selected").text();
	fila["IdAsistente"] = $("#ddlAsistente").val();
	fila["Asistente"] = $("#ddlAsistente option:selected").text();
	fila["CarteraAsignada"] = 0;
	$("#grid").addRowData($("#grid").jqGrid('getDataIDs').length + 1, fila);
	$("#spnMensaje").html("La asignación fue registrada de forma satisfactoria");
	$("#divMensaje").dialog("open");
}

function Eliminar(id){
	var elementos = $("#grid").jqGrid('getDataIDs');
	for(var i = 0; i < elementos.length; i++) {
	  if(parseInt(id) == parseInt(elementos[i])) {
		$('#grid').delRowData(elementos[i]);
	  }
	}
	$("#spnMensaje").html("La asignación fue eliminada de forma satisfactoria");
	$("#divMensaje").dialog("open");
}