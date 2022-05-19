const Reportes= require('../models/Reportes');

const crearReporte=async(reporte)=>{
return await Reportes.create(reporte);
}

const obtenerReportes=async()=>{
    return await Reportes.find();
}

const obetenerReportesRevisados=async()=>{
    return await Reportes.find().where('revisado').equals(true)
}

const obetenerReportesNoRevisados=async()=>{
    return await Reportes.find().where('revisado').equals(false)
}

const revisarUnReporte=async(id)=>{
    return await Reportes.findByIdAndUpdate(id,{revisado:'true'})
}

module.exports={
    crearReporte,
    obtenerReportes,
    obetenerReportesRevisados,
    obetenerReportesNoRevisados,
    revisarUnReporte
}
