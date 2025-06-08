// ============================================
// SCRIPT AUTOMÁTICO PARA FORMULARIO MÉDICO
// Primera página - 20 categorías de enfermedades CIE-10
// ============================================

(function() {
    'use strict';
    
    // Mapeo de categorías médicas con sus opciones (basado en el JSON proporcionado)
    const categoriasMedicas = {
        1: { // ENFERMEDADES INFECCIOSAS (A y B)
            id: "rc83969ce60c842f5adeb84b5bffc55fd",
            opciones: [
                "INFECCION INTESTINAL BACTERIANA, NO ESPECIFICADA",
                "INFECCION VIRAL DEL SISTEMA NERVIOSO CENTRAL, NO ESPECIFICADA",
                "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                "GASTROENTERITIS VIRAL, SIN OTRA ESPECIFICACION"
            ]
        },
        2: { // NEOPLASIAS (C)
            id: "r0313297517a94ee5a7398e90fff4b6f3",
            opciones: [
                "TUMOR BENIGNO DE LA PIEL, SITIO NO ESPECIFICADO",
                "NEVO MELANOCITICO, SITIO NO ESPECIFICADO"
            ]
        },
        3: { // TRASTORNOS DE LA SANGRE (D)
            id: "r0a6eab86d9c843b2bde7a5884e427762",
            opciones: [
                "ANEMIA POR DEFICIENCIA DE HIERRO SIN OTRA ESPECIFICACION",
                "ANEMIA DE TIPO NO ESPECIFICADO"
            ]
        },
        4: { // ENFERMEDADES ENDOCRINAS (E)
            id: "r3d602339fb364d35b0397d7b4167213d",
            opciones: [
                "DIABETES MELLITUS NO INSULINODEPENDIENTE SIN MENCION DE COMPLICACION",
                "HIPOTIROIDISMO, NO ESPECIFICADO",
                "OBESIDAD, NO ESPECIFICADA"
            ]
        },
        5: { // ENFERMEDADES MENTALES (F)
            id: "racedd8fbddbf4c3fa99906910472d928",
            opciones: [
                "EPISODIO DEPRESIVO LEVE",
                "TRASTORNO DE ANSIEDAD GENERALIZADA",
                "INSOMNIO NO ORGANICO"
            ]
        },
        6: { // SISTEMA NERVIOSO (G)
            id: "r2dd9de331a574459a2349f07c1398bea",
            opciones: [
                "CEFALEA DEBIDA A TENSION",
                "CEFALEA VASCULAR, NCOP",
                "MIGRAÑA SIN AURA [MIGRAÑA COMUN]"
            ]
        },
        7: { // OJO Y OÍDO (H)
            id: "r89aa10589190430aacd16243efafb9ad",
            opciones: [
                "MIOPIA",
                "HIPOACUSIA, NO ESPECIFICADA",
                "CONJUNTIVITIS AGUDA, NO ESPECIFICADA"
            ]
        },
        8: { // SISTEMA CIRCULATORIO (I)
            id: "rba5658b109cb4465bdc2dbc4b06347bc",
            opciones: [
                "HIPERTENSION ESENCIAL (PRIMARIA)",
                "PALPITACIONES",
                "HEMORROIDES NO ESPECIFICADAS, SIN COMPLICACION"
            ]
        },
        9: { // SISTEMA RESPIRATORIO (J)
            id: "rfbb3411c08db4a6c82b5d3c4f06037a0",
            opciones: [
                "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                "FARINGITIS AGUDA, NO ESPECIFICADA",
                "RINITIS ALERGICA, NO ESPECIFICADA",
                "BRONQUITIS AGUDA, NO ESPECIFICADA"
            ]
        },
        10: { // SISTEMA DIGESTIVO (K)
            id: "r75cbb3da217842438980ba9caa2aa993",
            opciones: [
                "DISPEPSIA",
                "GASTRITIS, NO ESPECIFICADA",
                "CONSTIPACION",
                "DIARREA FUNCIONAL"
            ]
        },
        11: { // PIEL Y TEJIDO SUBCUTÁNEO (L)
            id: "r28e8660ab2b547c38afd0d928f9e2170",
            opciones: [
                "DERMATITIS ATOPICA, NO ESPECIFICADA",
                "ACNE VULGAR",
                "URTICARIA, NO ESPECIFICADA"
            ]
        },
        12: { // SISTEMA OSTEOMUSCULAR (M)
            id: "rebbd12350a374ecca5f77c0e17718f33",
            opciones: [
                "DOLOR EN ARTICULACION",
                "DOLOR EN MIEMBRO",
                "LUMBAGO NO ESPECIFICADO",
                "CERVICALGIA"
            ]
        },
        13: { // APARATO GENITOURINARIO (N)
            id: "rfed834ef89cc4f85927230d6eea7027a",
            opciones: [
                "INFECCION DE VIAS URINARIAS, SITIO NO ESPECIFICADO",
                "DISMENORREA, NO ESPECIFICADA",
                "CISTITIS, NO ESPECIFICADA"
            ]
        },
        14: { // EMBARAZO, PARTO Y PUERPERIO (O) - Raramente se llena
            id: "r4aba5d34c235486eb393364bf2c8d32f",
            opciones: []
        },
        15: { // PERIODO PERINATAL (P) - Raramente se llena
            id: "rc7d8e03b5c694f41875ee79e0941a8fc",
            opciones: []
        },
        16: { // MALFORMACIONES CONGÉNITAS (Q) - Raramente se llena
            id: "r0535f0273d524618a9bd722fafb534fe",
            opciones: []
        },
        17: { // SÍNTOMAS Y SIGNOS (R)
            id: "r2e770e591aa74e689f686f85e4a27436",
            opciones: [
                "CEFALEA",
                "MALESTAR Y FATIGA",
                "MAREO Y DESVANECIMIENTO",
                "FIEBRE, NO ESPECIFICADA",
                "DOLOR, NO ESPECIFICADO"
            ]
        },
        18: { // TRAUMATISMOS (S y T)
            id: "rac5c9d3218c24c03b5352e9e8f5cee97",
            opciones: [
                "CONTUSION DEL HOMBRO Y DEL BRAZO",
                "CONTUSION DE LA RODILLA",
                "HERIDA DEL CUERO CABELLUDO"
            ]
        },
        19: { // CAUSAS EXTERNAS (V y Y) - Raramente se llena
            id: "r8aa6d4946c3545d084a08aad2980c682",
            opciones: []
        },
        20: { // FACTORES DE SALUD (Z)
            id: "r4d2c8cebe20f467d9ea81202604abe30",
            opciones: [
                "EXAMEN MEDICO GENERAL",
                "CONSULTA, NO ESPECIFICADA",
                "CONTROL GENERAL DE SALUD DE RUTINA",
                "ATENCION MEDICA, NO ESPECIFICADA"
            ]
        }
    };

    // Patrones de casos clínicos comunes y realistas
    const casosClinicosComunes = [
        {
            nombre: "Infección Respiratoria Superior",
            probabilidad: 25,
            categorias: [1, 9, 17], // Infecciosas, Respiratorio, Síntomas
            opciones: {
                1: "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                9: "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                17: "FIEBRE, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Consulta de Rutina",
            probabilidad: 20,
            categorias: [20], // Solo factores de salud
            opciones: {
                20: "EXAMEN MEDICO GENERAL"
            }
        },
        {
            nombre: "Cefalea/Migraña",
            probabilidad: 15,
            categorias: [6, 17], // Sistema nervioso, Síntomas
            opciones: {
                6: "CEFALEA DEBIDA A TENSION",
                17: "CEFALEA"
            }
        },
        {
            nombre: "Dolor Musculoesquelético",
            probabilidad: 12,
            categorias: [12, 17], // Osteomuscular, Síntomas
            opciones: {
                12: "LUMBAGO NO ESPECIFICADO",
                17: "DOLOR, NO ESPECIFICADO"
            }
        },
        {
            nombre: "Problemas Digestivos",
            probabilidad: 10,
            categorias: [10, 17], // Digestivo, Síntomas
            opciones: {
                10: "DISPEPSIA",
                17: "DOLOR, NO ESPECIFICADO"
            }
        },
        {
            nombre: "Hipertensión y Control",
            probabilidad: 8,
            categorias: [8, 20], // Circulatorio, Factores de salud
            opciones: {
                8: "HIPERTENSION ESENCIAL (PRIMARIA)",
                20: "ATENCION MEDICA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Ansiedad/Depresión Leve",
            probabilidad: 5,
            categorias: [5, 17], // Mental, Síntomas
            opciones: {
                5: "TRASTORNO DE ANSIEDAD GENERALIZADA",
                17: "MALESTAR Y FATIGA"
            }
        },
        {
            nombre: "Problemas Dermatológicos",
            probabilidad: 3,
            categorias: [11], // Piel
            opciones: {
                11: "DERMATITIS ATOPICA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Sin Diagnóstico Específico",
            probabilidad: 2,
            categorias: [], // Nada seleccionado
            opciones: {}
        }
    ];

    // Función para seleccionar caso clínico basado en probabilidades
    function seleccionarCasoClinico() {
        const random = Math.random() * 100;
        let acumulado = 0;
        
        for (const caso of casosClinicosComunes) {
            acumulado += caso.probabilidad;
            if (random <= acumulado) {
                return caso;
            }
        }
        
        return casosClinicosComunes[casosClinicosComunes.length - 1]; // Por defecto el último
    }

    // Función para hacer clic en un dropdown y seleccionar una opción
    function seleccionarOpcion(questionId, textoOpcion) {
        try {
            // Buscar el elemento dropdown
            const dropdown = document.querySelector(`[aria-describedby="${questionId}_placeholder_content"]`);
            if (!dropdown) {
                console.log(`No se encontró dropdown para ${questionId}`);
                return false;
            }

            // Hacer clic en el dropdown para abrirlo
            dropdown.click();
            
            // Esperar un poco para que se abra el menú
            setTimeout(() => {
                // Buscar la opción en el menú desplegable
                const opciones = document.querySelectorAll('[role="option"]');
                for (const opcion of opciones) {
                    if (opcion.textContent.includes(textoOpcion)) {
                        opcion.click();
                        console.log(`✓ Seleccionado: ${textoOpcion}`);
                        return true;
                    }
                }
                console.log(`✗ No se encontró la opción: ${textoOpcion}`);
                
                // Cerrar el dropdown si no se encontró la opción
                dropdown.click();
            }, 200);
            
        } catch (error) {
            console.error(`Error al seleccionar opción para ${questionId}:`, error);
            return false;
        }
    }

    // Función principal para llenar el formulario
    function llenarFormulario() {
        console.log("🏥 Iniciando llenado automático del formulario médico...");
        
        // Seleccionar caso clínico
        const casoSeleccionado = seleccionarCasoClinico();
        console.log(`📋 Caso clínico seleccionado: ${casoSeleccionado.nombre}`);
        
        // Limpiar todas las selecciones primero (hacer clic en botones de limpiar)
        const botonesLimpiar = document.querySelectorAll('button[aria-label="Borrar selección"]');
        botonesLimpiar.forEach(boton => {
            try {
                boton.click();
            } catch (e) {
                // Ignorar errores de botones no visibles
            }
        });

        // Aplicar las selecciones del caso clínico
        let delay = 500; // Retraso inicial
        
        Object.entries(casoSeleccionado.opciones).forEach(([categoria, opcion]) => {
            setTimeout(() => {
                const categoriaInfo = categoriasMedicas[parseInt(categoria)];
                if (categoriaInfo) {
                    seleccionarOpcion(categoriaInfo.id, opcion);
                }
            }, delay);
            delay += 300; // Incrementar retraso para cada selección
        });

        console.log("✅ Formulario completado. Revisa las selecciones antes de continuar.");
        
        // Mostrar resumen
        setTimeout(() => {
            console.log("\n📊 RESUMEN DEL CASO CLÍNICO:");
            console.log(`Tipo: ${casoSeleccionado.nombre}`);
            console.log("Categorías afectadas:", casoSeleccionado.categorias.map(c => 
                `${c}. ${Object.keys(categoriasMedicas).find(k => categoriasMedicas[k] === categoriasMedicas[c])}`
            ));
            console.log("Opciones seleccionadas:", casoSeleccionado.opciones);
        }, delay + 500);
    }

    // Función para continuar a la siguiente página
    function continuarSiguientePagina() {
        const botonSiguiente = document.querySelector('button[aria-label="Siguiente"]');
        if (botonSiguiente) {
            botonSiguiente.click();
            console.log("➡️ Continuando a la siguiente página...");
        } else {
            console.log("❌ No se encontró el botón Siguiente");
        }
    }

    // Función para generar un caso personalizado
    function generarCasoPersonalizado(categorias, opciones) {
        console.log("🎯 Generando caso personalizado...");
        
        let delay = 500;
        Object.entries(opciones).forEach(([categoria, opcion]) => {
            setTimeout(() => {
                const categoriaInfo = categoriasMedicas[parseInt(categoria)];
                if (categoriaInfo) {
                    seleccionarOpcion(categoriaInfo.id, opcion);
                }
            }, delay);
            delay += 300;
        });
    }

    // Exportar funciones globalmente para uso en consola
    window.automacionMedica = {
        llenar: llenarFormulario,
        continuar: continuarSiguientePagina,
        personalizado: generarCasoPersonalizado,
        casos: casosClinicosComunes,
        categorias: categoriasMedicas
    };

    console.log("🚀 Script cargado exitosamente!");
    console.log("📖 Comandos disponibles:");
    console.log("   automacionMedica.llenar() - Llenar formulario automáticamente");
    console.log("   automacionMedica.continuar() - Ir a siguiente página");
    console.log("   automacionMedica.personalizado({categoria: 'opcion'}) - Caso personalizado");
    console.log("   automacionMedica.casos - Ver casos disponibles");

    // Ejecutar automáticamente
    llenarFormulario();

})();

// ============================================
// INSTRUCCIONES DE USO:
// ============================================
// 1. Abre la consola del navegador (F12)
// 2. Pega este código completo
// 3. Presiona Enter
// 4. El script se ejecutará automáticamente
// 5. Para continuar: automacionMedica.continuar()
// ============================================